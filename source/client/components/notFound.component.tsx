import { useLocation } from "react-router";
import React from "react";

const NotFoundComponent = () => {
	const location = useLocation();

	return (
		<div>
			<h3>
				No route match for <code>{location.pathname}</code>
			</h3>
		</div>
	);
}

export {
	NotFoundComponent,
};