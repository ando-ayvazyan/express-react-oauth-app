import pick from 'lodash/pick';

const repoListTransformer = (item: {[key: string]: any}) =>
	({
		...pick(item, 'id', 'name'),
		ownerName: item.owner?.login?.split('/')?.[0]
	});

export {
	repoListTransformer
};