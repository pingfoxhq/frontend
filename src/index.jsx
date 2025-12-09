import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';

import { ChakraProvider } from '@chakra-ui/react';

import { system } from "./theme.js"

export function App() {
	return (
		<ChakraProvider value={system}>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</main>
			</LocationProvider>
		</ChakraProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
