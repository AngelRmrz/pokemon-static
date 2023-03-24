import '@/styles/globals.css';
import { SSRProvider } from '@react-aria/ssr';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { darkTheme as dark } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<NextUIProvider theme={dark}>
				<Component {...pageProps} />
			</NextUIProvider>
		</SSRProvider>
	);
}
