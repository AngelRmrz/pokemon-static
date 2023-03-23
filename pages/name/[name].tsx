import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { pokeApi } from '@/api';
import { PokemonInfo, PokemonListResponse } from '@/interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { localFavorites } from '@/utils';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface PokemonPageProps {
	pokemon: PokemonInfo;
}

const PokemonByNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(
		localFavorites.existInFavorites(pokemon.id)
	);

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		});
	};

	return (
		<MainLayout title={pokemon.name}>
			<Grid.Container css={{ mt: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									pokemon.sprites.front_default
								}
								alt={pokemon.name}
								width='100%'
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card isHoverable css={{ padding: '30px' }}>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button
								auto
								size='md'
								color='gradient'
								ghost={!isInFavorites}
								onPress={onToggleFavorite}>
								{isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text h3>Sprites</Text>
							<Container display='flex' direction='row'>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</MainLayout>
	);
};
export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
	const allPokemons = data.results.map(pokemon => pokemon.name);

	return {
		paths: allPokemons.map(name => ({ params: { name } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	return {
		props: {
			pokemon: await getPokemonInfo(name),
		},
	};
};