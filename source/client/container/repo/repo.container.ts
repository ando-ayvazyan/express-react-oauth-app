import { connect } from 'react-redux';
import { selectorRepo } from './repo.selector';
import { UserRepoComponent } from "../../components/repo/userRepo.component";
import { getUserReposAction } from "../../actions/repo";

const RepoContainer = connect(
	selectorRepo,
	{
		onGetUserRepos: getUserReposAction
	}
)(UserRepoComponent);

export {
	RepoContainer,
};