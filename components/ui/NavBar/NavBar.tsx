import Image from 'next/image';
import { Spacer, useTheme, Text, Row, Container } from '@nextui-org/react';
import Link from 'next/link';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	const { theme } = useTheme();

	return (
		<Container css={{ backgroundColor: theme?.colors.gray100.value }}>
			<Row justify='space-between'>
				<Link href='/' passHref>
					<Row>
						<Text h2>Po</Text>
						<Text h2 color='secondary'>
							kemon
						</Text>
					</Row>
				</Link>
				<Spacer x={1} />
				<Link href='/favorites' passHref>
					<Text h2 color='secondary'>
						Favoritos
					</Text>
				</Link>
			</Row>
		</Container>
	);
};

export default NavBar;
