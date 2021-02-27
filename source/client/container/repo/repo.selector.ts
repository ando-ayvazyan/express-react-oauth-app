import { createSelector } from 'reselect'
import { sectionSelector } from '../../helper/selectors.helper'
import values from "lodash/values";

const selectorRepo = createSelector(
	sectionSelector('entity.repo'),
	(section) => {
		const {isPending, items} = section;
		return {
			isPending,
			repos: values(items),
		};
	}
);

const selectorCommits = createSelector(
	sectionSelector('entity.commit'),
	(section) => {
		const {isPending, items} = section;
		console.log('....', items);
		return {
			isPending,
			commits: values(items),
		};
	}
);

export {
	selectorRepo,
	selectorCommits,
};