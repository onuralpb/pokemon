"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import type { PokemonListType } from "@/types/PokemonListType";
import PokemonInfoBox from "@/components/pokemon/pokemonInfoBox";
import Paging from "@/components/tools/paging";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxhook";
import { setPageOffset, setPokemonList } from "@/store/pokemonslice";
import type { PokemonStateType } from "@/store/pokemonslice";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonListType>();
  console.log("pokemons: ", pokemons);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const pokemonsState = useAppSelector((state: any) => state.pokemon);
  const offset = pokemonsState?.offset || 0;
  const limit = process.env.NEXT_PUBLIC_POKEMON_PER_PAGE_LIMIT;

  console.log("pokemonsState: ", pokemonsState);

  useEffect(() => {
    dispatch(setPageOffset(offset));
    offset > 0 && fetchData();
  }, [dispatch, offset, limit]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get<PokemonListType>(
        `${pokemonsState.baseUrl}?offset=${offset}&limit=${limit}`
      );
      console.log("response: ", response.data);

      setPokemons(response.data);
      dispatch(setPokemonList(response.data));
    } catch (error) {
      console.error("Hata:", error);
      setError("Veri alınamadı");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    offset === 0 && fetchData();
  }, [offset]);

  return (
    <>
      {loading ? (
        <p className="text-center">Yükleniyor...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <PokemonInfoBox
            pokemons={pokemons as PokemonListType}
            offset={offset}
          />
          <Paging pagingInfo={pokemonsState as PokemonStateType} />
        </>
      )}
    </>
  );
}
