const APP_ROUTES = {
	ROOT: '/',
	USER: '/user',
	USER_REPO: '/user/repo',
	USER_REPO_COMMITS: '/:user/:repo/commits',
	COMMIT_DETAILS: '/:user/:repo/commits/:sha',
	GITHUB_HANDLER: '/github/handler',
};

const APP_EXTERNAL_ROUTES = {
	GITHUB_LOGIN: 'https://github.com/login/oauth/authorize?client_id={clientId}&scope=repo',
	GITHUB_EXCHANGE_TOKEN: 'https://github.com/login/oauth/access_token'
};

const API_ENDPOINTS = {
	USER: '/user',
	USER_REPOS: '/user/repos',
	USER_REPO_COMMITS: '/repos/{user}/{repo}/commits',
};

export {
	APP_ROUTES,
	API_ENDPOINTS,
	APP_EXTERNAL_ROUTES,
};