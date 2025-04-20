import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container flex-grow mx-auto px-4 ">
      <div className="py-8 flex justify-center">
        <Link
          href="pokemon-list"
          className={buttonVariants({ variant: "secondary" })}
        >
          POKEMONLARI YÜKLE
        </Link>
      </div>
    </div>
  );
}
