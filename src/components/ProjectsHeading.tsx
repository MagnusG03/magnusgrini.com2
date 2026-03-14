"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsHeading() {
  const [secretClicks, setSecretClicks] = useState(0);
  const router = useRouter();

  const handleSecretClick = () => {
    if (secretClicks >= 5) {
      setSecretClicks(0);
      router.push("/netscape");
      return;
    }

    setSecretClicks(secretClicks + 1);
  };

  return (
    <h1
      onClick={handleSecretClick}
      className="my-16 text-center text-4xl font-bold"
    >
      Projects
    </h1>
  );
}
