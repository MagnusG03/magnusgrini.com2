import Link from "next/link";

export default function DinosaurGame() {
  const keycapClassName =
    "mx-0.5 inline-flex min-w-8 items-center justify-center rounded-md border border-zinc-400 bg-gradient-to-b from-white to-zinc-200 px-2 py-1 align-middle text-sm font-bold tracking-wide text-zinc-900 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_0_rgba(24,24,27,0.18)]";

  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Dinosaur Game (Alpha)</h1>
      <div className="mx-6 sm:mx-0">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-center aspect-[8/5]">
          <iframe
            src="/netscape/index.html"
            title="Unity Game"
            className="w-full h-full border-none"
            allow="fullscreen"
          />
        </div>
        <h3 className="text-lg mt-8 text-center">
          <kbd className={keycapClassName}>A</kbd>
          <kbd className={keycapClassName}>D</kbd> to move, {" "}
          <kbd className={keycapClassName}>W</kbd> to jump, {" "}
          <kbd className={keycapClassName}>S</kbd> to crouch, {" "}
          <kbd className={keycapClassName}>Shift</kbd> to sprint.
        </h3>
        <h3 className="text-lg mt-8">
          Dinosaur game is a simple 2D platformer game I developed in the summer of 2025 using the Unity experience I gained from my bachelor's project. All of the systems are set up to allow for easy creation of more levels, however I've only made one so far. All of the assets in the game are hand drawn by me in Aseprite. {" "}
          <Link
            href="https://github.com/MagnusG03/Netscape"
            target="_blank"
            className="text-blue-500"
          >
            Click here for the Git repository.
          </Link>{" "} <strong>Can you beat the level?</strong>
        </h3>
      </div>
    </div>
  );
}
