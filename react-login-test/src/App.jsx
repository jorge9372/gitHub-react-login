import { useEffect } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		const url = window.location.href;
		const hasCode = url.includes('?code=');

		if (hasCode) {
			const newUrl = url.split('?code=');
			const code = newUrl[1];
			console.log(url);
			console.log(code);
		}
	}, [isAuthenticated]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Application</h1>
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			<Profile />
		</div>
	);
}

export default App;
