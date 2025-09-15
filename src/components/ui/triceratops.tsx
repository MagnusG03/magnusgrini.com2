type Props = {
  scale?: number;
  moving?: boolean;              // pass isMoving from the page
  idleSheet?: string;
  runSheet?: string;
  idleFrames?: number;
  runFrames?: number;
  runMs?: number;                // optional override (default 400)
  idleMs?: number;               // optional override (default 6500)
};

export default function Triceratops({
  scale = 2,
  moving = false,
  idleSheet = "triceratopsSheet.webp",
  runSheet = "triceratopsRunSheet.webp",
  idleFrames = 4,
  runFrames = 3,
  runMs = 400,
  idleMs = 6500,
}: Props) {
  const fw = 52;
  const fh = 65;

  const base: React.CSSProperties = {
    width: fw,
    height: fh,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    imageRendering: "pixelated",
    willChange: "background-position",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    position: "absolute",
    inset: 0,
  };

  // Explicit animations so they fully stop/start:
  const idleAnim = `triceratops-idle ${idleMs}ms steps(1,end) infinite`;
  const runAnim  = `triceratops-run ${runMs}ms steps(1,end) infinite`;

  return (
    <div style={{ width: fw * scale, height: fh * scale, position: "relative" }}>
      {/* Idle layer */}
      <div
        style={{
          ...base,
          backgroundImage: `url('/netscape/${idleSheet}')`,
          backgroundSize: `${fw * idleFrames}px ${fh}px`,
          animation: moving ? "none" : idleAnim,        // off when moving
          opacity: moving ? 0 : 1,
          visibility: moving ? "hidden" : "visible",
        }}
      />
      {/* Run layer */}
      <div
        style={{
          ...base,
          backgroundImage: `url('/netscape/${runSheet}')`,
          backgroundSize: `${fw * runFrames}px ${fh}px`,
          animation: moving ? runAnim : "none",          // off when idle
          opacity: moving ? 1 : 0,
          visibility: moving ? "visible" : "hidden",
        }}
      />
    </div>
  );
}
