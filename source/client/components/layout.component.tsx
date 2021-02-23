import React from "react";
import Helmet from "react-helmet";

const LayoutComponent = (props: { children?: React.ReactElement }) => {
	const { children } = props;
	return (
		<div>
			<Helmet>
				<title>Layout Page</title>
				<meta name="description" content="This is a Layout page" />
			</Helmet>
			{ children }
		</div>
	);
}

export {
	LayoutComponent,
}