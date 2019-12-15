import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
	domain: 'bcsuperkingssportsclub.auth0.com',
	clientId: 'a4RefPBqDJYUq8ULn63iAUbSgXtaBB3t',
	clientSecret: 'tLbm8RCjopflXgd3y4VpXTtgwV4WOVfha_GwKxFxb6K01trsvcuMH6HdPvMinA98',
	scope: 'openid profile read:current_user',
	redirectUri: 'https://bcsuperkings-git-authentication.janarajagopalan.now.sh//api/callback',
	postLogoutRedirectUri: 'https://bcsuperkings-git-authentication.janarajagopalan.now.sh/',
	session: {
		// The secret used to encrypt the cookie.
		cookieSecret: '3m6OAFFc6hANeJVwQmN214kGFdKwl3jL',
		// The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
		cookieLifetime: 60 * 60 * 8,
		// Store the id_token in the session. Defaults to false.
		storeIdToken: false,
		// Store the access_token in the session. Defaults to false.
		storeAccessToken: false,
		// Store the refresh_token in the session. Defaults to false.
		storeRefreshToken: false,
	},
	oidcClient: {
		// Optionally configure the timeout in milliseconds for HTTP requests to Auth0.
		httpTimeout: 2500,
		// Optionally configure the clock tolerance in milliseconds, if the time on your server is running behind.
		clockTolerance: 10000,
	},
});
