import img1 from "@/assets/magnusgrini.com/oldmagnusgrini.png";
import Image from "next/image";

export default function MagnusGrini() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto py-12">
      <h1 className="my-16 text-4xl font-bold text-center">MagnusGrini.com</h1>
      <div className="">
        <h3 className="text-lg">
          MagnusGrini.com is a website I developed in the summer of 2023 for use as a CV, as well as to learn React. The website was built using React, TypeScript, HTML, and CSS. In 2024 I updated the website design and switched to using Next.js, Tailwind, and Shadcn.
        </h3>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img1}
          alt="old magnusgrini.com"
          width={1000}
          height={800}
          className=""
          />
        </div>
        
      </div>
    </div>
  );
}
