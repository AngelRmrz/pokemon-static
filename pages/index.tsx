import { pokeApi } from '@/api';
import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPage, GetStaticProps } from 'next';
import { PokemonListResponse, SmallPokemon, Pokemon } from '../interfaces/pokemonList';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/ui/PokemonCard';

interface HomePageProps {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
	return (
		<>
			<MainLayout title='Home Page'>
				<Grid.Container gap={2}>
					{pokemons.map(pokemon => (
						<Grid xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
							<PokemonCard pokemon={pokemon} />
						</Grid>
					))}
				</Grid.Container>
			</MainLayout>
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ctx => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	const { results } = await res.json();

	const pokemons: SmallPokemon[] = await Promise.all(
		results.map(async (poke: SmallPokemon, index: number) => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
			const data: Pokemon = await res.json();

			return {
				id: index + 1,
				name: poke.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`,
				types: data.types.map(type => type.type.name),
			};
		})
	);

	return {
		props: {
			pokemons: pokemons,
		},
	};
};
