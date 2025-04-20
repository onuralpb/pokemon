import Link from "next/link";
import type { PokemonDetailType } from "@/types/PokemonDetailType";

export default function PokemonDetail({
  pokemon,
}: {
  pokemon: PokemonDetailType;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <Link href="/pokemon-list" className="text-blue-500 mb-4 inline-block">
          Geri
        </Link>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={pokemon.sprites.other?.["official-artwork"]?.front_default}
              alt={pokemon.name}
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="flex items-center mb-4">
              <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Türler</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className="px-3 py-1">
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold">Boy</h2>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div>
                <h2 className="font-semibold">Ağırlık</h2>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
