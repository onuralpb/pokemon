import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container">
      <div className="grid grid-flow-col gap-4 py-8">
        <a href="/" title="Pokemon Next" className="mx-auto">
          <Image
            className="dark:invert"
            src="/pokemon_logo.svg"
            alt="Pokemon logo"
            width={150}
            height={39}
            priority
          />
        </a>
      </div>
    </header>
  );
}
