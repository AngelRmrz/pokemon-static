import React from 'react';
import { Grid, Card, Row, Text, Col, Button } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';
import { useRouter } from 'next/router';
import { pokemonTypesColors } from '../../../constants/colors';
export interface PokemonCardProps {
	pokemon: SmallPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
	pokemon: { id, name, image, types },
}) => {
	const router = useRouter();
	const handleGoToPokemon = () => {
		router.push(`/name/${name}`);
	};

	const mainColorGlow = pokemonTypesColors.find(color => color.type === types[0]);

	return (
		<Card
			isHoverable
			isPressable
			onPress={handleGoToPokemon}
			css={{
				padding: '30px',
				cursor: 'pointer',
				'&:hover': {
					transition: '0.5s',
					boxShadow: `0px 0px 15px 0px ${mainColorGlow?.color}`,
					// backgroundColor: `${mainColorGlow?.color}`,
				},
			}}>
			<Card.Header>
				<Row justify='space-between'>
					<Text h2 transform='capitalize'>
						{name}
					</Text>
					<Text h2 transform='capitalize'>
						#{id}
					</Text>
				</Row>
			</Card.Header>
			<Card.Divider />
			<Card.Body>
				<Card.Image src={image} alt={name} width='100%' height={200} />
			</Card.Body>
		</Card>
	);
};

export default PokemonCard;
