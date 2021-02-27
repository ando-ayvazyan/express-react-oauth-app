import style from "./loader.component.style.scss";
import React from "react";

const LoaderComponent = () => {
	return (
		<div className={style.loader}>
			<div className={style.spinner} />
		</div>
	)
}


export {
	LoaderComponent,
};