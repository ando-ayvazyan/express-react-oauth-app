import React from "react";
import { LayoutComponent } from "./layout.component";

const AppComponent = (props: { children?: React.ReactElement }) => {
	return (
		<LayoutComponent children={ props.children } />
	);
}

export {
	AppComponent
};
