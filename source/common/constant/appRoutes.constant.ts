const APP_ROUTES = {
	ROOT: '/',
	VIEWER: '/user',
	USER: '/:user',
	USER_REPO: '/:user/:repo',
	USER_REPO_COMMITS: '/:user/:repo/commits',
	GITHUB_HANDLER: '/github/handler',
};

const APP_EXTERNAL_ROUTES = {
	GITHUB_LOGIN: 'https://github.com/login/oauth/authorize?client_id={0}&scope=repo',
	GITHUB_EXCHANGE_TOKEN: 'https://github.com/login/oauth/access_token'
};

export {
	APP_ROUTES,
	APP_EXTERNAL_ROUTES,
};