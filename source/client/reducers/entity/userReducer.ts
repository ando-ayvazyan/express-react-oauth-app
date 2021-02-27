import { getUserType } from '../../actions/user';

const initialState = {
	isPending: false,
	details: {},
};

const userReducer = (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case getUserType.success:
			return {
				...state,
				isPending: false,
				details: { ...state.details, ...payload}
			};
		case getUserType.process:
			return {
				...state,
				isPending: true
			};
		case getUserType.error:
			return {
				...state,
				isPending: false
			};
		default:
			return state
	}
};

export {
	userReducer
};