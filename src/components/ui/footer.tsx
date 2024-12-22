import Link from "next/link";
import Image from "next/image";
import MGLogo from "@/assets/MGLogo.webp";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-60 w-full mx-auto px-4 md:px-6 lg:px-8">
      <footer className="flex h-auto w-full items-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 w-full py-6">
          <div className="flex flex-row items-center justify-center gap-x-4">
            <Link href="/" className="flex">
              <Image
                src={MGLogo}
                alt="MG Logo"
                width={128}
                height={128}
                className="dark:invert w-12 h-12"
              />
            </Link>
            <Link href="/" className="flex">
                <h1 className="text-3xl font-[family-name:var(--font-geist-mono)] font-bold">Magnus Grini</h1>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center">
            <Link
              href="mailto:mgrini2003@gmail.com"
              className="text-gray-300 group inline-flex h-9 w-max items-center justify-center px-8 py-2 text-lg font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 dark:hover:text-white"
            >
              mgrini2003@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/magnus-grini-0424522a7"
              className="text-gray-300 group inline-flex h-9 w-max items-center justify-center px-8 py-2 text-lg font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 dark:hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
