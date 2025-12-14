import {
	LocationProvider,
	Router,
	Route,
	hydrate,
	prerender as ssr,
} from "preact-iso";

import { ChakraProvider, Box, Flex } from "@chakra-ui/react";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import { SignUp } from "./pages/SignUp/index.jsx";
import { LogIn } from "./pages/Login/index.jsx";
import Logout from "./pages/Logout/index.jsx";

import { Toaster } from "./components/ui/toaster.jsx";
import { FullPageLoader } from "./components/FullPageLoader.jsx";

import { AuthProvider } from "./auth/AuthProvider.jsx";
import { useAuth } from "./auth/useAuth.js";

import "./api/interceptors"; // MUST be imported once
import { system } from "./theme.js";
import { FadeTransition } from "./components/FadeTransition.jsx";

function AppContent() {
	const { user, loading } = useAuth();

	if (loading) {
		return <>
			<FadeTransition show={loading} >
				<FullPageLoader />
			</FadeTransition >
		</>
	}

	return (

		<>
			<FadeTransition show={loading}>
				<FullPageLoader />
			</FadeTransition>

			<FadeTransition show={!loading}>
				<Box minH="100vh">
					<Header user={user} />

					<Router>
						<Route path="/" component={Home} />
						<Route path="/auth/sign-up" component={SignUp} />
						<Route path="/auth/log-in" component={LogIn} />
						<Route path="/auth/log-out" component={Logout} />
						<Route default component={NotFound} />
					</Router>

					<Toaster />
				</Box>
			</FadeTransition>
		</>
	);
}

export function App() {
	return (
		<LocationProvider>
			<ChakraProvider value={system}>
				<AuthProvider>
					<AppContent />
				</AuthProvider>
			</ChakraProvider>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<>
		<AuthProvider>
			<App />
		</AuthProvider>
	</>, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
