import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPage, GetStaticProps } from 'next';

const HomePage: NextPage = props => {
	console.log('props', props);

	return (
		<>
			<MainLayout title='Home Page'>
				<h1>Home</h1>
			</MainLayout>
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ctx => {
	console.log('getStaticProps');

	return {
		props: {},
	};
};
