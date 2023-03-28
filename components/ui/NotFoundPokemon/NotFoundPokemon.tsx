import { Container, Grid, Image, Text } from '@nextui-org/react';
import React from 'react';
export interface NotFoundPokemonProps {}

const NotFoundPokemon: React.FC<NotFoundPokemonProps> = () => {
	return (
		<Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Text h2>Lo lamento, el pokemon que buscas no se encuentra</Text>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
				width={300}
				height={300}
				alt='No hay favoritos'
				css={{
					opacity: 0.5,
				}}
			/>
		</Container>
	);
};

export default NotFoundPokemon;
