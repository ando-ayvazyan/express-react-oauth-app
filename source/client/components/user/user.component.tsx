import React from "react";
import Helmet from "react-helmet";
import { onMount } from "client/helper/hooks/lifecycle.helper";
import { APP_ROUTES } from "../../../common/constant/appRoutes.constant";
import { Link } from "react-router-dom";
import style from "./user.component.style.scss";
import isEmpty from "lodash/isEmpty";
import {LoaderComponent} from "../base/loader/loader.component";

interface IUserComponentProps {
	onGetUser: () => void;
	isPending: boolean;
	details: any;
}

const UserComponent =  (props: IUserComponentProps) => {
	const {details, isPending, onGetUser} = props;

	onMount(() => {
		onGetUser();
	});

	if (isPending) {
		return <LoaderComponent />;
	}

	return (
		<div>
			<Helmet>
				<title>User Page</title>
				<meta name="description" content="This is a User page" />
			</Helmet>
			{
				!isEmpty(details) && (
					<div className={style.userPage}>
						<div className={style.avatar}>
							<img src={details.avatar_url} />
						</div>
						<div className={style.userDetails}>
							<div>
								Name - {details.name}
							</div>
							<div>
								Handle - {details.login}
							</div>
							<div>
								Email: - {details.email}
							</div>
							<div>
								Location: - {details.location}
							</div>
							<div>
								Repos - <Link to={APP_ROUTES.USER_REPO}>{details.public_repos}</Link>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);

};

export {
	UserComponent,
};