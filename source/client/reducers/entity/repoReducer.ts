import { getUserReposType } from "client/actions/repo";

const initialState = {
	isPending: false,
	items: {},
};

const repoReducer = (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case getUserReposType.process:
			return {
				...state,
				isPending: true
			};
		case getUserReposType.success:
			return {
				...state,
				isPending: false,
				items: { ...state.items, ...payload }
			};
		case getUserReposType.error:
			return {
				...state,
				isPending: false
			};
		default:
			return state
	}
};

export {
	repoReducer
};