import pick from 'lodash/pick';

const userTransformer = (item: {[key: string]: any}) =>
	({
		...pick(item, 'id', 'name', 'email', 'avatar_url', 'location', 'public_repos', 'login'),
	});

export {
	userTransformer
};