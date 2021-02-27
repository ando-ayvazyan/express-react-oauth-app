import React from "react";
import {APP_ROUTES} from "../../../common/constant/appRoutes.constant";

const SomethingWentWrongComponent = () => {
	return (
		<div>
			<h3>
				Something went wrong
			</h3>
			<div>
				<a href={APP_ROUTES.ROOT}>Go to home page</a>
			</div>
		</div>
	);
}

export {
	SomethingWentWrongComponent,
};