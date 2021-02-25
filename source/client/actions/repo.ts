import {ReduxAction} from '../helper/reduxAction.helper';
import {api} from '../api';
import {IAction} from "client/interface/action";

const getUserReposType = new ReduxAction('get-user-repos');
const getUserRepoType = new ReduxAction('get-user-repo');
const getUserRepoCommitsType = new ReduxAction('get-user-repo-commits');

const getUserReposAction = ({user}: {user: string}): IAction  => async (dispatch) => {
	dispatch({
		type: getUserReposType.process
	});

	try {

		const result = await api.repo.getRepos({user});

		dispatch({
			type: getUserReposType.success,
			payload: result
		});
	} catch (error) {

		dispatch({
			type: getUserReposType.error,
			payload: error
		});
	}
};

const getUserRepoAction = ({user, repo}: {user: string, repo: string}): IAction => async (dispatch) => {
	dispatch({
		type: getUserRepoType.process
	});

	try {

		const result = await api.repo.getRepo({user, repo});

		dispatch({
			type: getUserRepoType.success,
			payload: result
		});
	} catch (error) {

		dispatch({
			type: getUserRepoType.error,
			payload: error
		});
	}
};

const getUserRepoCommitsAction = ({user, repo}: {user: string, repo: string}): IAction => async (dispatch) => {
	dispatch({
		type: getUserRepoCommitsType.process
	});

	try {

		const result = await api.repo.getRepoCommits({user, repo});

		dispatch({
			type: getUserRepoCommitsType.success,
			payload: result
		});
	} catch (error) {

		dispatch({
			type: getUserRepoCommitsType.error,
			payload: error
		});
	}
};

export {
	getUserReposType,
	getUserRepoType,
	getUserRepoCommitsType,
	getUserRepoAction,
	getUserReposAction,
	getUserRepoCommitsAction,
};