type Props = {
  scale?: number;
  characterSheet?: string;
  animation?: string;
  duration?: string;
  timing?: string;
  iterationCount?: string;
  fw?: number;
  fh?: number;
  frames?: number;
  invert?: boolean; // flip horizontally
};

export default function Triceratops({
  scale = 2,
  characterSheet = "triceratopsSheet.webp",
  animation = "triceratops-idle",
  duration = "6500ms",
  timing = "steps(1,end)",
  iterationCount = "infinite",
  invert = false,
  fw = 52,
  fh = 65,
  frames = 4,
}: Props) {
  const scaledW = fw * scale;

  return (
    <div style={{ width: scaledW, height: fh * scale }}>
      <div
        className="
          bg-no-repeat bg-left
          [image-rendering:pixelated] [image-rendering:crisp-edges]
        "
        style={{
          width: fw,
          height: fh,
          backgroundImage: `url('/netscape/${characterSheet}')`,
          backgroundSize: `${fw * frames}px ${fh}px`,

          // ✅ Flip fix: when inverted, mirror and shift back by the scaled width
          transform: invert
            ? `translateX(${scaledW}px) scale(${-scale}, ${scale})`
            : `scale(${scale})`,
          transformOrigin: "top left",

          // animation (Option A)
          animationName: animation,
          animationDuration: duration,
          animationTimingFunction: timing,
          animationIterationCount: iterationCount,

          willChange: "background-position, transform",
        }}
      />
    </div>
  );
}
