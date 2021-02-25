import { getViewerType } from '../../actions/user';

const initialState = {
	isPending: false,
	details: {},
};

const viewerReducer = (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case getViewerType.process:
			return {
				...state,
				isPending: true
			};
		case getViewerType.success:
			return {
				...state,
				isPending: false,
				details: { ...state.details, ...payload }
			};
		case getViewerType.error:
			return {
				...state,
				isPending: false
			};
		default:
			return state
	}
};

export {
	viewerReducer
};