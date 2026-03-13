export default function Netscape() {
  return (
    <main style={{ width: "100%", height: "100vh", margin: 0 }}>
      <iframe
        src="/netscape/index.html"
        title="Unity Game"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="fullscreen"
      />
    </main>
  );
}