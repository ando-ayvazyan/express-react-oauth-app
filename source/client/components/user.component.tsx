import React from "react";
import Helmet from "react-helmet";

const UserComponent =  () => {
	return (
		<div>
			<Helmet>
				<title>User Page</title>
				<meta name="description" content="This is a User page" />
			</Helmet>
		</div>
	);

};

export {
	UserComponent,
};