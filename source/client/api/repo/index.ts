import {request} from "common/helper/request.helper";
import {formatApiUrl} from "common/helper/text.hlper";
import {API_ENDPOINTS} from "common/constant/appRoutes.constant";

interface IUserRepoParams {
	user: string,
	repo: string,
}

const getRepos = async () => await request(API_ENDPOINTS.USER_REPOS);

const getRepoCommits = async ({user, repo}: IUserRepoParams) => await request(formatApiUrl(API_ENDPOINTS.USER_REPO_COMMITS, user, repo));

export const repo = {
	getRepos,
	getRepoCommits,
};