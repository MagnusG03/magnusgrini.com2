import img1 from "@/assets/weighttracker/1.webp";
import img2 from "@/assets/weighttracker/2.webp";
import img3 from "@/assets/weighttracker/3.webp";
import img4 from "@/assets/weighttracker/4.webp";
import Image from "next/image";
import Link from "next/link";

export default function Weighttracker() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto py-12">
      <h1 className="my-16 text-4xl font-bold text-center">WeightTracker</h1>
      <div className="">
        <h3 className="text-lg">
          Weight Tracker is an application I created using React Native in
          order to learn the framework. This is my second project made in
          React Native, after a simple calculator app that served as my
          introduction to the framework. I chose to create a weight tracker
          app because I am interested in working out, and thought that making
          a weight tracking app would both be useful and educational.{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.magnusgrini.WeightTracker"
            target="_blank"
            className="text-blue-500"
          >
            Click here for the app in the Google Play Store.
          </Link>{" "}
          Below are a few screenshots from the program.
        </h3>
      </div>
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <Image
          src={img1}
          alt="Weight Tracker screenshot 1"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img2}
          alt="Weight Tracker screenshot 2"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img3}
          alt="Weight Tracker screenshot 3"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img4}
          alt="Weight Tracker screenshot 4"
          width={300}
          height={800}
          className=""
        />
      </div>
      </div>
    </div>
  );
}
