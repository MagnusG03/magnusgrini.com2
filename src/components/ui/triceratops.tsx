export default function Triceratops({ scale = 2, animation = "triceratops-idle", characterSheet = "triceratopsSheet.webp", frames = 4 }: { scale?: number, animation?: string, characterSheet?: string, frames?: number }) {
  const fw = 52;
  const fh = 65;

  return (
    <div style={{ width: fw * scale, height: fh * scale }}>
      <div
        className={`
          bg-no-repeat bg-left animate-${animation}
          [image-rendering:pixelated] [image-rendering:crisp-edges]
        `}
        style={{
          width: fw,
          height: fh,
          backgroundImage: `url('/netscape/${characterSheet}')`,
          backgroundSize: `${fw * frames}px ${fh}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}