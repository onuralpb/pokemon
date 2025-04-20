// Pokemon detay API yanıtı için tip tanımlaması
export type PokemonDetailType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
        front_default: string;
    };
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
        };
        is_hidden: boolean;
    }[];
};