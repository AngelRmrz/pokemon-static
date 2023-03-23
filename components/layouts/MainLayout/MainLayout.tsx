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
	const origin = typeof window !== 'undefined' ? window.location.origin : '';

	return (
		<>
			<Head>
				<title>Pokemon + Next + NextUI </title>
				<meta name='author' content='@angelrmrz' />
				<meta name='description' content={`Informacion sobre el pokemon ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
				<meta property='og:title' content={`Informacion sobre ${title}`} />
				<meta
					property='og:description'
					content={`Esta es la informacion que tenemos sobre ${title}`}
				/>
				<meta property='og:image' content={`${origin}/img/banner.png`} />
			</Head>

			<NavBar />

			<main style={{ padding: '0px 20px' }}>{children}</main>
		</>
	);
};

export default MainLayout;
