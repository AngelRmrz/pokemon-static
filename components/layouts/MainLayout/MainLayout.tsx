import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar, Text, Image } from '@nextui-org/react';

export interface MainLayoutProps {
	title?: string;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon + Next + NextUI'} </title>
				<meta name='author' content='@angelrmrz' />
				<meta name='description' content={`Informacion sobre el pokemon ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
			</Head>
			<Navbar variant='static' isBordered>
				<Navbar.Brand>
					<Image
						src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
						width={75}
						height={75}
						alt='Pokemon'
					/>
					<Text b color='inherit'>
						POKEDEX
					</Text>
				</Navbar.Brand>
				<Navbar.Content>
					<Navbar.Link href='#'>Favoritos</Navbar.Link>
				</Navbar.Content>
			</Navbar>
			<main style={{ padding: '0px 20px' }}>{children}</main>
		</>
	);
};

export default MainLayout;
