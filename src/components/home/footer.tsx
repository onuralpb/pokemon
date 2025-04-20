import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container py-8">
      <div className="flex justify-center gap-8 items-center">
        <Link href="/home">
          <Image src="/pokemon_icon.svg" width={20} height={80} alt="Home" />
        </Link>
        <span>|</span>
        <Link href="/pokemon-list">Pokemons</Link>
      </div>
    </footer>
  );
}
