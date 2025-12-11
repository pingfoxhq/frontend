import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { SignUp } from './pages/SignUp/index.jsx';

import { Box, ChakraProvider } from '@chakra-ui/react';

import { system } from "./theme.js"
import { LogIn } from './pages/Login/index.jsx';
import { Toaster } from './components/ui/toaster.jsx';

export function App() {
	return (
		<LocationProvider>
			<ChakraProvider value={system}>
				<Box>
				<Header />
					<Router>
						<Route path="/" component={Home} />
						<Route path="/auth/sign-up" component={SignUp} />
						<Route path="/auth/log-in" component={LogIn} />
						<Route default component={NotFound} />
					</Router>
					<Toaster/>
				</Box>
			</ChakraProvider>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
