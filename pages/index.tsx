import { pokeApi } from '@/api';
import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPage, GetStaticProps } from 'next';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemonList';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/ui/PokemonCard';

interface HomePageProps {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
	return (
		<>
			<MainLayout title='Home Page'>
				<Grid.Container gap={2} justify='flex-start'>
					{pokemons.map(pokemon => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))}
				</Grid.Container>
			</MainLayout>
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
	const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
		...poke,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			index + 1
		}.svg`,
	}));

	return {
		props: {
			pokemons: pokemons,
		},
	};
};
