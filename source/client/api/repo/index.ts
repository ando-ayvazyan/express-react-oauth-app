import {request} from "common/helper/request.helper";
import {formatApiUrl} from "common/helper/text.hlper";
import {API_ENDPOINTS} from "common/constant/appRoutes.constant";

interface IUserRepoParams {
	user: string,
	repo: string,
}

const getRepos = async ({user}: {user: IUserRepoParams['user']}) => await request(formatApiUrl(API_ENDPOINTS.USER_REPOS, user));

const getRepo = async ({user, repo}: IUserRepoParams) => await request(formatApiUrl(API_ENDPOINTS.USER_REPO, user, repo));

const getRepoCommits = async ({user, repo}: IUserRepoParams) => await request(formatApiUrl(API_ENDPOINTS.USER_REPO_COMMITS, user, repo));

export const repo = {
	getRepos,
	getRepo,
	getRepoCommits,
};