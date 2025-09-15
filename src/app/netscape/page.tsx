"use client";

import { useEffect, useRef, useState } from "react";
import Triceratops from "@/components/ui/triceratops";

export default function Netscape() {
  // ---------- State that can re-render (low frequency)
  const [isMoving, setIsMoving] = useState(false);
  const [facingRight, setFacingRight] = useState(true);
  const [spawnReady, setSpawnReady] = useState(false);

  const didSpawn = useRef(false);

  // ---------- Refs (high frequency, no re-render)
  const keys = useRef<Set<string>>(new Set());

  // Physics state (authoritative)
  const phys = useRef({ x: 200, y: 200, vx: 0, vy: 0 });

  // Render state (for interpolation)
  const renderPos = useRef({ x: 200, y: 200 });

  // Bounds + DOM
  const bounds = useRef({ w: 0, h: 0, spriteW: 104, spriteH: 130 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dinoRef = useRef<HTMLDivElement | null>(null);

  // ---------- Config (tune these freely)
  const FIXED_DT = 1 / 60;             // physics tick (seconds) — independent of frame rate
  const MAX_STEPS = 10;                 // safety to avoid spiral of death on tab switch
  const WALK_SPEED = 220;               // px/sec at full input (physics space)

  // ---------- Measure container for clamping
  useEffect(() => {
    const updateBounds = () => {
      const el = containerRef.current;
      if (!el) return;
      bounds.current.w = el.clientWidth;
      bounds.current.h = el.clientHeight;

      if (!didSpawn.current) {
        phys.current.x = bounds.current.w / 2 - bounds.current.spriteW / 2;
        phys.current.y = bounds.current.h / 2 - bounds.current.spriteH / 2;
        renderPos.current.x = phys.current.x;
        renderPos.current.y = phys.current.y;

        // position immediately
        if (dinoRef.current) {
          dinoRef.current.style.transform =
            `translate(${renderPos.current.x}px, ${renderPos.current.y}px)`;
        }

        didSpawn.current = true;
        setSpawnReady(true);
      };
    }
    updateBounds();
    const ro = new ResizeObserver(updateBounds);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateBounds);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  // Input handling
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
      keys.current.add(k);
      if (k === "a" || k === "arrowleft") setFacingRight(false);
      if (k === "d" || k === "arrowright") setFacingRight(true);
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

  // GameLoop
  useEffect(() => {
    let accum = 0;              // how much un-simulated time we have
    let lastTime: number | null = null;
    let raf = 0;

    const physicsStep = (dt: number) => {
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

      // 🔥 Immediate velocity assignment (no accel/friction smoothing)
      p.vx = dx * WALK_SPEED;
      p.vy = dy * WALK_SPEED;

      // integrate
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // clamp
      const { w, h, spriteW, spriteH } = bounds.current;
      if (w && h) {
        const maxX = Math.max(0, w - spriteW);
        const maxY = Math.max(0, h - spriteH);
        p.x = Math.min(Math.max(0, p.x), maxX);
        p.y = Math.min(Math.max(0, p.y), maxY);
      }

      setIsMoving(prev => (prev !== moving ? moving : prev));
    };

    const frame = (now: number) => {
      if (lastTime == null) lastTime = now;
      let frameDt = (now - lastTime) / 1000; // seconds since last RAF
      lastTime = now;

      // Accumulate time and run fixed physics steps
      accum += frameDt;
      let steps = 0;
      while (accum >= FIXED_DT && steps < MAX_STEPS) {
        physicsStep(FIXED_DT);
        accum -= FIXED_DT;
        steps++;
      }

      // Interpolate for smooth rendering
      const alpha = Math.max(0, Math.min(1, accum / FIXED_DT)); // [0..1]
      const p = phys.current;
      const interpX = p.x + p.vx * alpha * FIXED_DT;
      const interpY = p.y + p.vy * alpha * FIXED_DT;
      renderPos.current.x = interpX;
      renderPos.current.y = interpY;

      // Apply transform
      if (dinoRef.current) {
        const translate = `translate(${interpX}px, ${interpY}px)`;
        const flip = facingRight ? " scaleX(-1)" : "";
        dinoRef.current.style.transform = translate + flip;
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [facingRight]);

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {spawnReady && (
        <div
          ref={dinoRef}
          className="absolute top-0 left-0 will-change-transform pointer-events-none"
          style={{ transform: `translate(${renderPos.current.x}px, ${renderPos.current.y}px)` }}
        >
          <Triceratops
            animation={isMoving ? "triceratops-run" : "triceratops-idle"}
            characterSheet={isMoving ? "triceratopsRunSheet.webp" : "triceratopsSheet.webp"}
            frames={isMoving ? 3 : 4}
            scale={2}
          />
        </div>
      )}
    </div>
  );
}