import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { commonRoutes } from "./routes";
import {parseDocumentCookies} from "./helper/cockie.helper";
import axios from "axios";

const cookies = parseDocumentCookies(document.cookie);

if (cookies.authorization) {
	axios.defaults.headers.authorization = `Bearer ${cookies.authorization}`;
}

const jsx = (
	<Router>
		<Route path={ '/' }>
			{ commonRoutes }
		</Route>
	</Router>
);

ReactDOM.render(
	jsx,
	document.getElementById( "app" ),
);
