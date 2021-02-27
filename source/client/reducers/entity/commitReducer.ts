import { getUserRepoCommitsType } from "client/actions/repo";

const initialState = {
	isPending: false,
	items: {},
};

const commitReducer = (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case getUserRepoCommitsType.success:
			return {
				...state,
				isPending: false,
				items: { ...state.items, ...payload }
			};
		case getUserRepoCommitsType.process:
			return {
				...state,
				isPending: true
			};
		case getUserRepoCommitsType.error:
			return {
				...state,
				isPending: false
			};
		default:
			return state
	}
};

export {
	commitReducer
};