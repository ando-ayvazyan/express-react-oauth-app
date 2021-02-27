import React from 'react';
import {CONSTANT_MAIN} from "common/constant/main.constant";

interface IHtmlComponentProps {
	children: string;
	initialState?: {[key: string]: any};
	scripts: string[];
	styles: string[];
}

const HtmlComponent = ({ children, scripts, styles }: IHtmlComponentProps) => (
	<html>
	<head>
		<meta charSet="UTF-8" />
		<title />
		{styles.map((href: string, index: number) => <link href={href} rel={'stylesheet'} key={`${index}_stylesheet`} type={'text/css'} />)}
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
