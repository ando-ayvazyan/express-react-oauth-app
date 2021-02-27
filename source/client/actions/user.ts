import { ReduxAction } from '../helper/reduxAction.helper';
import { api } from '../api';
import { IAction } from "client/interface/action";
import { normalizeResponse } from "../helper/normalizer";
import { userTransformer } from "../helper/transformers/userTransformer";

const getUserType = new ReduxAction('get-user');

const getUserAction = (): IAction => async (dispatch) => {
	dispatch({
		type: getUserType.process
	});

	try {
		const result = await api.user.getUser();

		if (result) {
			const userData = normalizeResponse({data: result, transformer: userTransformer});

			dispatch({
				type: getUserType.success,
				payload: userData
			});
		}

	} catch (error) {

		dispatch({
			type: getUserType.error,
			payload: error
		});
	}
};
export {
	getUserType,
	getUserAction,
};