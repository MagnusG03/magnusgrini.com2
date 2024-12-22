"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MGLogo from "@/assets/MGLogo.webp";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 w-full mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 hidden lg:flex">
          <Image
            src={MGLogo}
            alt="MG Logo"
            width={128}
            height={128}
            className="dark:invert w-12 h-12"
          />
        </Link>

        <div className="flex-1 flex justify-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-gray-300 group inline-flex h-9 w-max items-center justify-center px-8 py-2 text-lg font-medium transition-colors ${
                pathname === link.href
                  ? "border-b-2 border-rose-500 dark:text-white"
                  : "hover:text-gray-900 dark:hover:text-gray-50 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex w-10"></div>
      </header>
    </div>
  );
}
