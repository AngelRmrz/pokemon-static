import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { pokeApi } from '@/api';
import { PokemonInfo } from '@/interfaces';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

interface PokemonPageProps {
	pokemon: PokemonInfo;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
	return (
		<MainLayout title='Pokemon Page'>
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
							<Button auto size='md' color='gradient' ghost>
								Guardar en favoritos
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
export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async ctx => {
	const allPokemons = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: allPokemons.map(id => ({ params: { id } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<PokemonInfo>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data,
		},
	};
};
