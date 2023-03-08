import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { NavBar } from '@/components/ui/NavBar';

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
				<title>Pokemon + Next + NextUI </title>
				<meta name='author' content='@angelrmrz' />
				<meta name='description' content={`Informacion sobre el pokemon ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
			</Head>

			<NavBar />

			<main style={{ padding: '0px 20px' }}>{children}</main>
		</>
	);
};

export default MainLayout;
