export interface PokemonListResponse {
	results: {
		name: string;
		url: string;
	}[];
}

export interface Pokemon {
	id: number;
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
}

export interface SmallPokemon {
	id: number;
	name: string;
	image: string;
	types: string[];
}
