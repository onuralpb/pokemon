import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonListType } from '@/types/PokemonListType';

export interface PokemonStateType {
    pokemonList: PokemonListType | null;
    selectedPokemonUrl: string | null;
    selectedPokemonName: string | null;
    offset: number;
    limit: number;
    baseUrl: string;
}

const initialState: PokemonStateType = {
    pokemonList: null,
    selectedPokemonUrl: null,
    selectedPokemonName: null,
    offset: 0,
    limit: 10,
    baseUrl: process.env.NEXT_PUBLIC_POKE_API_BASE_URL!
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action: PayloadAction<PokemonListType>) => {
            state.pokemonList = action.payload;
        },
        setSelectedPokemon: (state, action: PayloadAction<{ name: string; url: string }>) => {
            state.selectedPokemonName = action.payload.name;
            state.selectedPokemonUrl = action.payload.url;
        },
        setPageOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setPageLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setBaseUrl: (state, action: PayloadAction<string>) => {
            state.baseUrl = action.payload;
        }
    },
});

export const {
    setPokemonList,
    setSelectedPokemon,
    setPageOffset,
    setPageLimit,
    setBaseUrl
} = pokemonSlice.actions;

export default pokemonSlice.reducer;