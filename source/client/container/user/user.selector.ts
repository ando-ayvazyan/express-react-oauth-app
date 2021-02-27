import { createSelector } from 'reselect'
import { sectionSelector } from '../../helper/selectors.helper'

const selector = createSelector(
	sectionSelector('entity.user'),
	(section) => {
		const {isPending, details} = section;

		return {
			isPending,
			details,
		};
	}
);

export {
	selector,
};