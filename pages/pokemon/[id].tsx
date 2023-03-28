import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { PokemonInfo } from '@/interfaces';
import { Button, Card, Container, Grid, Text, Image, Badge } from '@nextui-org/react';
import { localFavorites } from '@/utils';
import { useState } from 'react';
import { getPokemonInfo } from '../../utils/getPokemonInfo';
import confetti from 'canvas-confetti';
import { pokemonTypesColors } from '@/constants/colors';

interface PokemonPageProps {
	pokemon: PokemonInfo;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
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
						<Card.Header
							css={{
								display: 'flex',
								justifyContent: 'space-between',
								flexWrap: 'wrap',
							}}>
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
							<Text h3>Types</Text>
							<Container display='flex' direction='row' justify='space-between'>
								{pokemon.types.map((type, index) => (
									<Badge
										enableShadow
										disableOutline
										key={index}
										css={{
											backgroundColor: pokemonTypesColors.find(
												color => color.type === type.type.name
											)?.color,
										}}>
										{type.type.name.toLocaleUpperCase()}
									</Badge>
								))}
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</MainLayout>
	);
};
export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async ctx => {
	const allPokemons = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: allPokemons.map(id => ({ params: { id } })),
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	const pokemon = await getPokemonInfo(id);

	if (!pokemon) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400,
	};
};
