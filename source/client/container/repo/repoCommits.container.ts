import { connect } from 'react-redux';
import { selectorCommits } from './repo.selector';
import { getUserRepoCommitsAction } from "../../actions/repo";
import { UserRepoCommitsComponent } from "../../components/repo/userRepoCommits.component";

const RepoCommitsContainer = connect(
	selectorCommits,
	{
		onGetUserRepoCommits: getUserRepoCommitsAction
	}
)(UserRepoCommitsComponent);

export {
	RepoCommitsContainer,
};