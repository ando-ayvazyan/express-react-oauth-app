import React from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";

const UserComponent =  () => {
	return (
		<div>
			<Helmet>
				<title>User Page</title>
				<meta name="description" content="This is a User page" />
			</Helmet>
			<div>
				<Link to={ '/user/repo' } children={'go to user repo page'} />
			</div>
		</div>
	);

};

export {
	UserComponent,
};