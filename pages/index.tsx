import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPage, GetStaticProps } from 'next';
import { SmallPokemon, Pokemon, PokemonListResponse } from '../interfaces/pokemonList';
import { FormElement, Grid, Input } from '@nextui-org/react';
import { PokemonCard } from '@/components/ui/PokemonCard';
import { pokeApi } from '@/api';
import { ChangeEvent, useState, useEffect } from 'react';
import { NotFoundPokemon } from '@/components/ui/NotFoundPokemon';

interface HomePageProps {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
	const [searchedPokemon, setSearchedPokemon] = useState('');
	const [filteredPokemons, setFilteredPokemons] = useState<SmallPokemon[]>([]);
	const [onLoad, setOnLoad] = useState(false);

	const onSearch = (e: ChangeEvent<FormElement>) => {
		setSearchedPokemon(e.target.value);
		setOnLoad(true);
	};

	useEffect(() => {
		const filteredPokemons = pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase())
		);
		setFilteredPokemons(filteredPokemons);
	}, [pokemons, searchedPokemon, onLoad]);

	return (
		<>
			<MainLayout title='Home Page'>
				<Grid.Container gap={2}>
					<Input
						value={searchedPokemon}
						onChange={onSearch}
						labelPlaceholder='Search Pokemon'
						size='lg'
						bordered
						color='primary'
						rounded
						css={{
							width: '100%',
							marginTop: '50px',
							marginBottom: '20px',
						}}
					/>
					{onLoad && filteredPokemons.length === 0 && <NotFoundPokemon />}
					{filteredPokemons.map(pokemon => (
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
	const { data } = await pokeApi.get<PokemonListResponse>(
		'https://pokeapi.co/api/v2/pokemon?limit=151'
	);

	const pokemons = await Promise.all(
		data.results.map(async (poke, index) => {
			const response = await pokeApi.get(`/pokemon/${index + 1}`);
			const data: Pokemon = response.data;
			return {
				id: index + 1,
				name: poke.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
					index + 1
				}.png`,
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
