import React from "react";
import Helmet from "react-helmet";
import { onMount } from "../../helper/hooks/lifecycle.helper";
import { ICommit } from "../../interface/repo";
import { LoaderComponent } from "../base/loader/loader.component";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../common/constant/appRoutes.constant";
import { formatTextPattern } from "../../../common/helper/text.hlper";
import style from "./userRepo.component.style.scss";

interface IUserRepoCommitsComponentProps {
	isPending: boolean;
	onGetUserRepoCommits: (data: {user: string, repo: string}) => void;
	commits: ICommit[];
}

const UserRepoCommitsComponent =  (props: IUserRepoCommitsComponentProps) => {
	const {isPending, onGetUserRepoCommits, commits = []} = props;
	const {pathname} = location;
	const [, user, repo, ..._] = pathname.split('/')

	onMount(() => {
		onGetUserRepoCommits({user, repo});
	});

	if (isPending) {
		return <LoaderComponent />
	}

	return (
		<div>
			<Helmet>
				<title>User repo page</title>
				<meta name="description" content="This is a user repo commits page" />
			</Helmet>
			<div>
				{
					commits?.map((commit: ICommit, idx: number) => (
						<div key={`${idx}_${commit.sha}`} className={style.commit}>
							<Link to={formatTextPattern(APP_ROUTES.COMMIT_DETAILS, user, repo, commit.sha)}>
								{commit?.commit?.message}
							</Link>
						</div>
					))
				}
			</div>
		</div>
	);

};

export {
	UserRepoCommitsComponent,
};