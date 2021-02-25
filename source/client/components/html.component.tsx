import React from 'react';
import {CONSTANT_MAIN} from "common/constant/main.constant";

const HtmlComponent = ({ children, scripts }: { children: string, initialState?: {[key: string]: any}, scripts: string[] }) => (
	<html>
	<head>
		<meta charSet="UTF-8" />
		<title />
	</head>
	<body>
	<div
		id="app"
		dangerouslySetInnerHTML={{ __html: children }}
	/>

	{scripts.map((item: string, index: number) => <script key={index} nonce={CONSTANT_MAIN.SCRIPT_SRC_NONCE_KEY} src={item} />)}
	</body>
	</html>
);

export {
	HtmlComponent
};
