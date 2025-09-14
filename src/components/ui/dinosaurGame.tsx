import Triceratops from "./triceratops";

export default function DinosaurGame({
  scale = 2,
  duration = '8s', // base duration for foreground
}: {
  scale?: number;
  duration?: string;
}) {
  // native sizes
  const H = 256;
  const W_FORE = 2048;
  const W_MID = 1024;
  const W_BACK = 1024;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: H * scale }}
    >
      {/* Background (slowest: duration × 4) */}
      <div
        className="
          absolute inset-0 bg-repeat-x animate-bg-scroll-x
          [image-rendering:pixelated] [image-rendering:crisp-edges]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/netscape/grassBackground.webp')",
          backgroundSize: `${W_BACK}px ${H}px`,
          ['--tile-w' as any]: `${W_BACK}px`,
          ['--scroll-dur' as any]: `calc(${duration} * 4)`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          willChange: 'background-position, transform',
          zIndex: 0,
        }}
      />

      {/* Midground (medium: duration × 2) */}
      <div
        className="
          absolute inset-0 bg-repeat-x animate-bg-scroll-x
          [image-rendering:pixelated] [image-rendering:crisp-edges]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/netscape/grassMidground.webp')",
          backgroundSize: `${W_MID}px ${H}px`,
          ['--tile-w' as any]: `${W_MID}px`,
          ['--scroll-dur' as any]: `calc(${duration} * 2)`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          willChange: 'background-position, transform',
          zIndex: 10,
        }}
      />

      {/* Foreground (fastest: base duration) */}
      <div
        className="
          absolute inset-0 bg-repeat-x animate-bg-scroll-x
          [image-rendering:pixelated] [image-rendering:crisp-edges]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/netscape/grassForeground.webp')",
          backgroundSize: `${W_FORE}px ${H}px`,
          ['--tile-w' as any]: `${W_FORE}px`,
          ['--scroll-dur' as any]: duration,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          willChange: 'background-position, transform',
          zIndex: 20,
        }}
      />

      {/* 🦖 Triceratops sprite (on top, far left) */}
      <div className="absolute left-0 bottom-0 z-30 translate-y-[-40%] translate-x-[30%]">
        <Triceratops
          duration="600ms"
          frames={3}
          animation="triceratops-run"
          characterSheet="triceratopsRunSheet.webp"
          scale={scale}
          invert={true}
        />
      </div>
    </div>
  );
}
