import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import {onMount} from "../../helper/hooks/lifecycle.helper";
import {IRepo} from "../../interface/repo";
import {formatTextPattern} from "../../../common/helper/text.hlper";
import {APP_ROUTES} from "../../../common/constant/appRoutes.constant";
import {LoaderComponent} from "../base/loader/loader.component";
import style from "./userRepo.component.style.scss";

interface IUserRepoComponentProps {
	isPending: boolean;
	onGetUserRepos: () => void;
	repos: IRepo[];
}

const UserRepoComponent =  (props: IUserRepoComponentProps) => {
	const {isPending, onGetUserRepos, repos = []} = props;

	onMount(() => {
		onGetUserRepos();
	});

	if (isPending) {
		return <LoaderComponent />
	}

	return (
		<div>
			<Helmet>
				<title>User repo page</title>
				<meta name="description" content="This is a user repo page" />
			</Helmet>
			<div>
				{
					repos?.map((repo: IRepo, idx: number) => (
						<div key={`${repo.id}_${idx}`} className={style.repo}>
							<Link to={formatTextPattern(APP_ROUTES.USER_REPO_COMMITS, repo.ownerName, repo.name)} children={repo.name} />
						</div>
					))
				}
			</div>
		</div>
	);

};

export {
	UserRepoComponent,
};