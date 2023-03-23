import { Card, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
export interface FavoriteCardPokemonProps {
	pokemonId: number;
}

const FavoriteCardPokemon: React.FC<FavoriteCardPokemonProps> = ({ pokemonId }) => {
	const router = useRouter();
	const handleGoToPokemon = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid xs={12} sm={6} md={4} lg={3} xl={2}>
			<Card
				isHoverable
				isPressable
				onPress={handleGoToPokemon}
				css={{ cursor: 'pointer' }}>
				<Card.Header>
					<Text h3>Pokemon #{pokemonId}</Text>
				</Card.Header>
				<Card.Divider />
				<Card.Body>
					<Card.Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
						alt='Pokemon'
						width={200}
						height={200}
					/>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default FavoriteCardPokemon;
