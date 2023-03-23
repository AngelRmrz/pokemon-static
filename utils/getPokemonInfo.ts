import { pokeApi } from '@/api';
import { PokemonInfo } from '../interfaces/pokemonInfo';

export const getPokemonInfo = async (nameOrId: string) => {
	const { data } = await pokeApi.get<PokemonInfo>(`/pokemon/${nameOrId}`);

	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};
};
