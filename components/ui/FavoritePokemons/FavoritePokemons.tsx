import { Grid } from '@nextui-org/react';
import React from 'react';
import { FavoriteCardPokemon } from '../FavoriteCardPokemon';
export interface FavoritePokemonsProps {
	pokemons: number[];
}

const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({ pokemons }) => {
	return (
		<Grid.Container direction='row' justify='flex-start' gap={2}>
			{pokemons.map(pokemon => (
				<FavoriteCardPokemon pokemonId={pokemon} key={pokemon} />
			))}
		</Grid.Container>
	);
};

export default FavoritePokemons;
