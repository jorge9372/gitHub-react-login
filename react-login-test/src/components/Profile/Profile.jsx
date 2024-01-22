import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<div>
				<h2>Profile</h2>
				<img width={150} src={user.picture} alt={user.name} />
				<p>{user.name}</p>
				<p>{user.nickname}</p>
				<JSONPretty id='json-pretty' data={user} />
			</div>
		)
	);
};

export default Profile;
