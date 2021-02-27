import {ReduxAction} from '../helper/reduxAction.helper';
import {api} from '../api';
import {IAction} from "client/interface/action";
import {normalizeResponse} from "../helper/normalizer";
import {repoListTransformer} from "../helper/transformers/repoListTransformer";

const getUserReposType = new ReduxAction('get-user-repos');
const getUserRepoCommitsType = new ReduxAction('get-user-repo-commits');

const getUserReposAction = (): IAction  => async (dispatch) => {
	dispatch({
		type: getUserReposType.process
	});

	try {

		const result = await api.repo.getRepos();

		if (result) {
			dispatch({
				type: getUserReposType.success,
				payload: normalizeResponse({data: result, key: 'id', transformer: repoListTransformer})
			});
		}

	} catch (error) {

		dispatch({
			type: getUserReposType.error,
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
	getUserRepoCommitsType,
	getUserReposAction,
	getUserRepoCommitsAction,
};