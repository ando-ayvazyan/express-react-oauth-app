import React from "react";
import Helmet from "react-helmet";
import {onMount} from "client/helper/hooks/lifecycle.helper";

interface IUserComponentProps {
	onGetViewer: () => void;
	isPending: boolean;
	details: any;
}

const UserComponent =  (props: IUserComponentProps) => {
	const {details, isPending, onGetViewer} = props;

	onMount(() => {
		onGetViewer();
	});

	if (isPending) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Helmet>
				<title>User Page</title>
				<meta name="description" content="This is a User page" />
			</Helmet>
			<div>
				User id - {details?.id}
			</div>
		</div>
	);

};

export {
	UserComponent,
};