import PokemonList from "@/components/pokemon/pokemonList";
export default function PokemonListPage() {
  return (
    <div className="container flex-grow mx-auto px-4">
      <div className="py-8 flex flex-col gap-16">
        <PokemonList />
      </div>
    </div>
  );
}
