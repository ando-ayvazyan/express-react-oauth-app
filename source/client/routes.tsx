import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppComponent } from "./components/app/app.component";
import { NotFoundComponent } from "./components/notFound/notFound.component";
import { APP_ROUTES } from "../common/constant/appRoutes.constant";
import { UserContainer } from "client/container/user/user.container";
import { RepoContainer } from "./container/repo/repo.container";
import { RepoCommitsContainer } from "./container/repo/repoCommits.container";

const commonRoutes = (
	<AppComponent>
		<Switch>
			<Route path={APP_ROUTES.USER} exact component={ UserContainer } />
			<Route path={APP_ROUTES.USER_REPO} exact component={ RepoContainer } />
			<Route path={APP_ROUTES.USER_REPO_COMMITS} exact component={ RepoCommitsContainer } />
			<Route path={ '*' } component={ NotFoundComponent } />
		</Switch>
	</AppComponent>
);

export {
	commonRoutes,
}