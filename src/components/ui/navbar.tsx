"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MGLogo from "@/assets/logos/MGLogo.webp";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    transitionDuration: "175ms",
  });

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const getActiveLinkHref = () => {
    if (pathname.startsWith("/projects")) {
      return "/projects";
    }
    return pathname;
  };

  const updateUnderlinePosition = (faster = false) => {
    const activeLinkHref = getActiveLinkHref();
    const activeLinkElement = containerRef.current?.querySelector(
      `a[href="${activeLinkHref}"]`
    ) as HTMLElement;

    if (activeLinkElement) {
      const { offsetWidth, offsetLeft } = activeLinkElement;
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft,
        transitionDuration: faster ? "1ms" : "175ms",
      });
    }
  };

  useEffect(() => {
    updateUnderlinePosition();

    const handleResize = () => {
      updateUnderlinePosition(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full items-center px-4 md:px-6 relative">
        <Link href="/" className="mr-6 hidden lg:flex">
          <Image
            src={MGLogo}
            alt="MG Logo"
            width={128}
            height={128}
            className="dark:invert w-12 h-12"
          />
        </Link>

        <div
          ref={containerRef}
          className="flex-1 flex justify-center gap-8 relative"
        >
          <div
            className="absolute bottom-0 h-[2px] bg-rose-500"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
              transition: `all ${underlineStyle.transitionDuration} ease-in-out`,
            }}
          ></div>

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-gray-300 group inline-flex h-9 w-max items-center justify-center px-8 py-2 text-lg font-medium transition-colors ${
                getActiveLinkHref() === link.href
                  ? "text-rose-500"
                  : "hover:text-gray-900 dark:hover:text-gray-50 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
