import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const UserRepoComponent =  () => {
	return (
		<div>
			<Helmet>
				<title>User repo page</title>
				<meta name="description" content="This is a user repo page" />
			</Helmet>
			<div>
				<Link to={ '/user' } children={'go to user page'} />
			</div>
		</div>
	);

};

export {
	UserRepoComponent,
};