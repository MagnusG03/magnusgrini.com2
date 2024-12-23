import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/paths/1.png";
import img2 from "@/assets/paths/2.png";
import img3 from "@/assets/paths/3.png";
import img4 from "@/assets/paths/4.png";

export default function Paths() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Paths</h1>
      <div className="">
        <h3 className="text-lg">
          Paths is a decision-based interactive storytelling game engine
          developed by a peer and I for a school project. The program was
          developed in February 2023 using Java and the JavaFX library. We generated all the
          images in the program using MidJourney.{" "}
          <Link
            href="https://gitlab.stud.idi.ntnu.no/magngri/group11idatt2001"
            target="_blank"
            className="text-blue-500"
          >
            Click here for the Git repository.
          </Link>{" "}
          Below are a few screenshots from the program.
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Image
            src={img1}
            alt="Paths screenshot 1"
            width={1000}
            height={400}
            className=""
          />
          <Image
            src={img2}
            alt="Paths screenshot 2"
            width={1000}
            height={400}
            className=""
          />
          <Image
            src={img3}
            alt="Paths screenshot 3"
            width={1000}
            height={400}
            className=""
          />
          <Image
            src={img4}
            alt="Paths screenshot 4"
            width={1000}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
