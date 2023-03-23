import { MainLayout } from '@/components/layouts/MainLayout';
import { FavoritePokemons } from '@/components/ui/FavoritePokemons';
import { NoFavorites } from '@/components/ui/NoFavorites';
import { localFavorites } from '@/utils';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Favorites: NextPage = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons());
	}, []);

	return (
		<MainLayout title='Favoritos'>
			{favoritePokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritePokemons pokemons={favoritePokemons} />
			)}
		</MainLayout>
	);
};
export default Favorites;
