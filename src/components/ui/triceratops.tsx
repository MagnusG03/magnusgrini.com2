export default function Triceratops({ scale = 2 }: { scale?: number }) {
  const fw = 52;
  const fh = 65;
  const frames = 4;

  return (
    <div style={{ width: fw * scale, height: fh * scale }}>
      <div
        className="
          bg-no-repeat bg-left animate-triceratops-idle
          [image-rendering:pixelated] [image-rendering:crisp-edges]
        "
        style={{
          width: fw,
          height: fh,
          backgroundImage: "url('/netscape/triceratopsSheet.webp')",
          backgroundSize: `${fw * frames}px ${fh}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}