import { Image, Navbar, Text, styled } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	// const { theme } = useTheme();
	const router = useRouter();
	const isActivePath = (path: string) => router.pathname === path;

	const collapseItems = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Favorites',
			href: '/favorites',
		},
	];

	return (
		<Box
			css={{
				maxW: '100%',
			}}>
			<Navbar variant='static'>
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}>
					<Image src='/img/pokeball.png' alt='pokeball' width={50} height={50} />
					<Text h3 css={{ marginLeft: '10px' }}>
						Pokedex
					</Text>
				</Navbar.Brand>
				<Navbar.Toggle showIn='xs' />
				<Navbar.Content
					enableCursorHighlight
					activeColor='primary'
					hideIn='xs'
					variant='highlight'>
					<Navbar.Link href='/' isActive={isActivePath('/')}>
						Home
					</Navbar.Link>
					<Navbar.Link href='/favorites' isActive={isActivePath('/favorites')}>
						Favorites
					</Navbar.Link>
				</Navbar.Content>
				<Navbar.Collapse>
					{collapseItems.map(({ label, href }, index) => (
						<Navbar.CollapseItem
							key={index}
							activeColor='primary'
							css={{
								color: index === collapseItems.length - 1 ? '$error' : '',
							}}
							isActive={isActivePath(href)}>
							<Link href={href}>{label}</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
		</Box>
	);
};

const Box = styled('div', {
	boxSizing: 'border-box',
});

export default NavBar;
