"use client";

import { useState, useEffect } from "react";
import type { PokemonDetailType } from "@/types/PokemonDetailType";
import axios from "axios";
import PokemonDetail from "@/components/pokemon/pokemonDetail";
import { useAppSelector } from "@/hooks/reduxhook";

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  const selectedPokemonUrl = useAppSelector(
    (state: any) => state.pokemon.selectedPokemonUrl
  );

  useEffect(() => {
    async function fetchPokemonDetail() {
      try {
        setLoading(true);

        const response = await axios.get<PokemonDetailType>(
          `${selectedPokemonUrl}`
        );
        setPokemon(response.data);
        console.log("response.data: ", response.data);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonDetail();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center py-8">Yükleniyor...</p>
      ) : (
        pokemon && <PokemonDetail pokemon={pokemon as PokemonDetailType} />
      )}
    </>
  );
}
