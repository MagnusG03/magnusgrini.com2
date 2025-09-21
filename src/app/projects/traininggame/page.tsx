import img1 from "@/assets/traininggame/applegame.webp";
import img2 from "@/assets/traininggame/calibrationgame.webp";
import img3 from "@/assets/traininggame/calibrationstart.webp";
import img4 from "@/assets/traininggame/mainmenu.webp";
import Image from "next/image";

export default function TrainingGame() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Training Game</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          For my bachelor&apos;s thesis, in collaboration with the company Aible AS, my group partner and I created a motion tracking training game and calibration system with dynamic difficulty adjustment. The target demographic for this game was parkinson&apos;s patients, as they need physical exercise to mitigate some symptoms of their disease. Because of this target demographic, the dynamic difficulty adjustment is important, as the ability of the user can vary a lot. Unfortunately, I am under an NDA and cannot talk about the underlying technologies behind the system, however, here are some screenshots from the game, to give an idea of what it looks like.
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img4}
          alt="main menu"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img1}
          alt="apple game"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img2}
          alt="calibration game"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img3}
          alt="calibration start"
          width={1000}
          height={800}
          className=""
          />
        </div>
      </div>
    </div>
  );
}
