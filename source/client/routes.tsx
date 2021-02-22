import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppComponent } from "./components/app.component";
import { UserComponent } from "./components/user.component";
import { NotFoundComponent } from "./components/notFound.component";
import {APP_ROUTES} from "../common/constant/appRoutes.constant";

const commonRoutes = (
	<AppComponent>
		<Switch>
			<Route path={APP_ROUTES.USER} exact component={ UserComponent } />
			<Route path={ '*' } component={ NotFoundComponent } />
		</Switch>
	</AppComponent>
);

export {
	commonRoutes,
}