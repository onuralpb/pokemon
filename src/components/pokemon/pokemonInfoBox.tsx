import Link from "next/link";
import { PokemonListType } from "@/types/PokemonListType";
import { useAppDispatch } from "@/hooks/reduxhook";
import { setSelectedPokemon } from "@/store/pokemonslice";

interface Props {
  pokemons: PokemonListType;
  offset: number;
}

export default function PokemonInfoBox({ pokemons, offset }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {pokemons &&
        pokemons.results?.map((pokemon, index) => (
          <Link
            href={`/pokemon-detail/${pokemon.name}`}
            key={index}
            className="shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition-shadow bg-white hover:cursor-pointer hover:bg-gray-50"
            onClick={() =>
              dispatch(
                setSelectedPokemon({ name: pokemon.name, url: pokemon.url })
              )
            }
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                offset + index + 1
              }.png`}
              alt={pokemon.name}
              className="w-36 h-36 object-contain"
            />
            <h2 className="text-xl font-bold capitalize mt-3">
              {pokemon.name}
            </h2>
          </Link>
        ))}
    </div>
  );
}
