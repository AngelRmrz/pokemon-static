import Image from 'next/image';
import { Spacer, useTheme, Text, Input } from '@nextui-org/react';
import generateRandom from '@/utils/randomNumber';
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0x 50px',
				backgroundColor: theme?.colors.gray100.value,
			}}>
			<div
				style={{
					padding: '10px',
				}}>
				<Image
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
					alt='icono de la app'
					width={70}
					height={70}
				/>
			</div>
			<Text color='white' h2>
				P
			</Text>
			<Text color='white' h3>
				okémon
			</Text>
			{/* <Input placeholder='Next UI' /> */}
			<Spacer css={{ flex: 1 }} />
		</div>
	);
};

export default NavBar;
