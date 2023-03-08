export interface PokemonListResponse {
	count: number;
	next?: string;
	previous?: string;
	results: SmallPokemon[];
}

export interface SmallPokemon {
	id: number;
	name: string;
	image: string;
	url: string;
}