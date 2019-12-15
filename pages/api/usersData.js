import auth0 from '../../lib/auth0';
import createAuth0Client from '@auth0/auth0-spa-js';
const auth0 = await createAuth0Client({
	domain: 'bcsuperkingssportsclub.auth0.com',
	client_id: '8BrvUdnhJuK3xC38Tf7FwuwnlRLHjYK4',
});
const accessToken = await auth0.getTokenSilently({
	audience: 'https://bcsuperkingssportsclub.auth0.com/api/v2/',
	scope: 'read:current_user',
	response_type: 'id_token token',
});

export default async function userProfile(req, res) {
	try {
		await auth0.handleProfile(req, res);
	} catch (error) {
		console.error(error);
		res.status(error.status || 500).end(error.message);
	}
}
