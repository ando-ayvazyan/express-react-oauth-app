import {ReduxAction} from '../helper/reduxAction.helper';
import {api} from '../api';
import {IAction} from "client/interface/action";

const getViewerType = new ReduxAction('get-viewer');
const getUserType = new ReduxAction('get-user');

const getViewerAction = (): IAction  => async (dispatch) => {
	dispatch({
		type: getViewerType.process
	});

	try {

		const result = await api.user.getViewer();

		dispatch({
			type: getViewerType.success,
			payload: result
		});
	} catch (error) {

		dispatch({
			type: getViewerType.error,
			payload: error
		});
	}
};

const getUserAction = ({user}: {user: string}): IAction => async (dispatch) => {
	dispatch({
		type: getUserType.process
	});

	try {

		const result = await api.user.getViewer();

		dispatch({
			type: getUserType.success,
			payload: result
		});
	} catch (error) {

		dispatch({
			type: getUserType.error,
			payload: error
		});
	}
};
export {
	getUserType,
	getViewerType,
	getViewerAction,
	getUserAction,
};