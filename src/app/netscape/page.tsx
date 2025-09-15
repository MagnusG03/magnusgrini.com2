"use client";

import { useEffect, useRef, useState } from "react";
import Triceratops from "@/components/ui/triceratops";

export default function Netscape() {
  // ---------- Low-frequency React state
  const [isMoving, setIsMoving] = useState(false);
  const [facingRight, setFacingRight] = useState(true); // still used for UI/props
  const [spawnReady, setSpawnReady] = useState(false);

  // ---------- Mirrors/refs for hot path
  const facingRightRef = useRef(true); // use this in the loop to avoid restarts
  const didSpawn = useRef(false);
  const keys = useRef<Set<string>>(new Set());

  // Physics (authoritative)
  const phys = useRef({ x: 200, y: 200, vx: 0, vy: 0 });

  // Render/interp
  const renderPos = useRef({ x: 200, y: 200 });

  // Bounds + DOM
  const bounds = useRef({ w: 0, h: 0, spriteW: 104, spriteH: 130 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dinoRef = useRef<HTMLDivElement | null>(null);

  // Config
  const FIXED_DT = 1 / 60;            // fixed physics tick
  const MAX_STEPS = 10;               // cap to avoid spiral
  const WALK_SPEED = 220;             // px/s

  // ---------- A) Preload both sprite sheets to avoid swap flashes
  useEffect(() => {
    ["/netscape/triceratopsRunSheet.webp", "/netscape/triceratopsSheet.webp"].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ---------- Measure container for clamping (debounced)
  useEffect(() => {
    const updateBounds = () => {
      const el = containerRef.current;
      if (!el) return;
      bounds.current.w = el.clientWidth;
      bounds.current.h = el.clientHeight;

      if (!didSpawn.current) {
        // Center spawn once
        phys.current.x = bounds.current.w / 2 - bounds.current.spriteW / 2;
        phys.current.y = bounds.current.h / 2 - bounds.current.spriteH / 2;
        renderPos.current.x = phys.current.x;
        renderPos.current.y = phys.current.y;

        // Initial placement (C: translate3d)
        if (dinoRef.current) {
          dinoRef.current.style.transform =
            `translate3d(${renderPos.current.x}px, ${renderPos.current.y}px, 0)` +
            (facingRightRef.current ? " scaleX(-1)" : "");
        }

        didSpawn.current = true;
        setSpawnReady(true);
      }
    };

    let resizeRaf: number | null = null;
    const updateBoundsDebounced = () => {
      if (resizeRaf != null) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(updateBounds);
    };

    updateBounds();
    const ro = new ResizeObserver(updateBoundsDebounced);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateBoundsDebounced);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBoundsDebounced);
      if (resizeRaf != null) cancelAnimationFrame(resizeRaf);
    };
  }, []);

  // ---------- Input handling (B: update ref to avoid loop restarts)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
      keys.current.add(k);

      if (k === "a" || k === "arrowleft") {
        facingRightRef.current = false;
        setFacingRight(false);
      }
      if (k === "d" || k === "arrowright") {
        facingRightRef.current = true;
        setFacingRight(true);
      }
    };
    const up = (e: KeyboardEvent) => {
      keys.current.delete(e.key.toLowerCase());
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // ---------- Game Loop (fixed update + interpolated render)
  useEffect(() => {
    let accum = 0;
    let lastTime: number | null = null;
    let raf = 0;

    // E) Skip redundant DOM writes
    const lastDraw = { x: NaN, y: NaN, flip: false };
    const applyTransform = (x: number, y: number, flipRight: boolean) => {
      if (lastDraw.x === x && lastDraw.y === y && lastDraw.flip === flipRight) return;
      lastDraw.x = x; lastDraw.y = y; lastDraw.flip = flipRight;
      if (dinoRef.current) {
        dinoRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)` + (flipRight ? " scaleX(-1)" : "");
      }
    };

    const physicsStep = (dt: number) => {
      // Input → direction
      let dx = 0, dy = 0;
      const k = keys.current;
      if (k.has("w") || k.has("arrowup")) dy -= 1;
      if (k.has("s") || k.has("arrowdown")) dy += 1;
      if (k.has("a") || k.has("arrowleft")) dx -= 1;
      if (k.has("d") || k.has("arrowright")) dx += 1;

      const moving = dx !== 0 || dy !== 0;
      if (moving) {
        const len = Math.hypot(dx, dy);
        dx /= len; dy /= len;
      }

      const p = phys.current;
      // immediate velocity (arcade feel)
      p.vx = dx * WALK_SPEED;
      p.vy = dy * WALK_SPEED;

      // integrate
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // clamp to container
      const { w, h, spriteW, spriteH } = bounds.current;
      if (w && h) {
        const maxX = Math.max(0, w - spriteW);
        const maxY = Math.max(0, h - spriteH);
        p.x = Math.min(Math.max(0, p.x), maxX);
        p.y = Math.min(Math.max(0, p.y), maxY);
      }

      // update moving state only when it flips
      setIsMoving(prev => (prev !== moving ? moving : prev));
    };

    const frame = (now: number) => {
      if (lastTime == null) lastTime = now;
      const frameDt = (now - lastTime) / 1000;
      lastTime = now;

      // Clamp accumulator to avoid huge catch-ups (stops flicker after tab switch)
      accum = Math.min(accum + frameDt, 0.25);

      // Fixed steps
      let steps = 0;
      while (accum >= FIXED_DT && steps < MAX_STEPS) {
        physicsStep(FIXED_DT);
        accum -= FIXED_DT;
        steps++;
      }

      // Interpolate & draw (C: translate3d)
      const alpha = Math.max(0, Math.min(1, accum / FIXED_DT));
      const p = phys.current;
      const interpX = p.x + p.vx * alpha * FIXED_DT;
      const interpY = p.y + p.vy * alpha * FIXED_DT;

      renderPos.current.x = interpX;
      renderPos.current.y = interpY;

      // B/E: use ref for facing, skip redundant transform writes
      applyTransform(interpX, interpY, facingRightRef.current);

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [FIXED_DT]);

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* D) Always mounted; fade in once centered to prevent unmount/remount flashes */}
      <div
        ref={dinoRef}
        className="absolute top-0 left-0 will-change-transform pointer-events-none transition-opacity duration-150"
        style={{
          transform: `translate3d(${renderPos.current.x}px, ${renderPos.current.y}px, 0)`,
          opacity: spawnReady ? 1 : 0,
          contain: "layout paint",            // perf hint
          backfaceVisibility: "hidden",       // compositing stability
          transformStyle: "preserve-3d",      // compositing stability
        }}
      >
        <Triceratops
          animation={isMoving ? "triceratops-run" : "triceratops-idle"}
          characterSheet={isMoving ? "triceratopsRunSheet.webp" : "triceratopsSheet.webp"}
          frames={isMoving ? 3 : 4}
          scale={2}
        />
      </div>
    </div>
  );
}
