import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/sparesti/1.png";
import img2 from "@/assets/sparesti/2.png";

export default function Sparesti() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Sparesti</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          Sparesti is a website my team and I created in April 2024 for our full-stack 
          system development course at NTNU. Sparesti is a finance application 
          for saving, with integrated BankID connection and AI utilization for saving 
          challenge and saving tip creation. The application is functional on both PC 
          and mobile.{" "}
          <Link
            href="https://sparesti.no/auth"
            target="_blank"
            className="text-blue-500"
          >
            Click here for the website link.
          </Link>{" "}
          Or{" "}
          <Link
            href="https://gitlab.stud.idi.ntnu.no/idatt2106_2024_01"
            target="_blank"
            className="text-blue-500"
          >
            here for the Git repository.
          </Link>{" "}
          Unfortunately, it is no longer possible to log in to the website due to the 
          BankID test API no longer being available.
        </h3>
      </div>
        <div className="flex flex-col justify-center items-center mt-8 mx-6 sm:mx-0 mb-4">
          <Image
            src={img1}
            alt="Sparesti screenshot 1"
            width={1000}
            height={400}
            className=""
          />
          <Image
            src={img2}
            alt="Sparesti screenshot 2"
            width={600}
            height={400}
            className=""
          />
        </div>
    </div>
  );
}
