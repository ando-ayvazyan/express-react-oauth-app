import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppComponent } from "./components/app.component";
import { NotFoundComponent } from "./components/notFound.component";
import { APP_ROUTES } from "../common/constant/appRoutes.constant";
import { UserRepoComponent } from "./components/userRepo.component";
import { UserContainer } from "client/container/user/user.container";

const commonRoutes = (
	<AppComponent>
		<Switch>
			<Route path={APP_ROUTES.USER} exact component={ UserContainer } />
			<Route path={APP_ROUTES.USER_REPO} exact component={ UserRepoComponent } />
			<Route path={ '*' } component={ NotFoundComponent } />
		</Switch>
	</AppComponent>
);

export {
	commonRoutes,
}