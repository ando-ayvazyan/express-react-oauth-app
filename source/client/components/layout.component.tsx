import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const LayoutComponent = (props: { children?: React.ReactElement }) => {
	const { children } = props;
	return (
		<div>
			<Helmet>
				<title>Layout Page</title>
				<meta name="description" content="This is a Layout page" />
			</Helmet>
			<div>
				<Link to="/login">Login</Link>
			</div>
			{ children }
		</div>
	);
}

export {
	LayoutComponent,
}