import React from 'react';
import { Grid, Card, Row, Text, Col, Button } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';
import { useRouter } from 'next/router';
export interface PokemonCardProps {
	pokemon: SmallPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon: { id, name, image } }) => {
	const router = useRouter();
	const handleGoToPokemon = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid xs={12} sm={6} md={4} xl={3}>
			<Card
				variant='bordered'
				css={{ w: '600px', h: '300px' }}
				isHoverable
				isPressable
				onPress={handleGoToPokemon}>
				<Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
					<Col>
						<Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
							# {id}
						</Text>
						<Text transform='capitalize' h3>
							{name}
						</Text>
					</Col>
				</Card.Header>
				<Card.Body css={{ p: 0 }}>
					<Card.Image src={image} width='100%' alt={name} />
				</Card.Body>
				{/* <Card.Footer
					isBlurred
					css={{
						position: 'absolute',
						bgBlur: '#ffffff66',
						borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
						bottom: 0,
						zIndex: 1,
					}}>
					<Row>
						<Col>
							<Button flat auto rounded color='secondary'>
								<Text
									css={{ color: 'inherit' }}
									size={12}
									weight='bold'
									transform='uppercase'>
									Detalles
								</Text>
							</Button>
						</Col>
						<Col>
							<Row justify='flex-end'>
								<Button flat auto rounded color='secondary'>
									<Text
										css={{ color: 'inherit' }}
										size={12}
										weight='bold'
										transform='uppercase'>
										Favoritos
									</Text>
								</Button>
							</Row>
						</Col>
					</Row>
				</Card.Footer> */}
			</Card>
		</Grid>
	);
};

export default PokemonCard;
