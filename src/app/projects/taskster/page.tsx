import img1 from "@/assets/taskster/1.webp";
import img2 from "@/assets/taskster/2.webp";
import img3 from "@/assets/taskster/3.webp";
import img4 from "@/assets/taskster/4.webp";
import Image from "next/image";
import Link from "next/link";

export default function Taskster() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Taskster</h1>
      <div>
        <h3 className="text-lg">
          Taskster is a to-do list application created with Flutter. The app includes all the functionality expected from a to-do list, as well as the ability to add images to a list and archive a list. The app is available on the Google Play Store{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.magnusgrini.taskster"
            target="_blank"
            className="text-blue-500"
          >
            here
          </Link>
          .
        </h3>
      </div>
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <Image
          src={img1}
          alt="Taskster screenshot 1"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img2}
          alt="Taskster screenshot 2"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img3}
          alt="Taskster screenshot 3"
          width={300}
          height={800}
          className=""
        />
        <Image
          src={img4}
          alt="Taskster screenshot 4"
          width={300}
          height={800}
          className=""
        />
      </div>
      </div>
    </div>
  );
}
