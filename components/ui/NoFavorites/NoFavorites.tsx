import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';
export interface NoFavoritesProps {}

const NoFavorites: React.FC<NoFavoritesProps> = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc(100vh - 100px)',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'center',
			}}>
			<Text h1>No hay favoritos</Text>
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

export default NoFavorites;
