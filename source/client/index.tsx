import React from 'react';
import axios from "axios";
import './index.scss';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { commonRoutes } from "./routes";
import {parseDocumentCookies} from "./helper/cockie.helper";
import { Provider } from "react-redux";
import { storeRoot } from "client/store";

const cookies = parseDocumentCookies(document.cookie);

if (cookies.authorization) {
	axios.defaults.headers.Authorization = `Bearer ${cookies.authorization}`;
}

const jsx = (
	<Provider store={ storeRoot }>
		<Router>
			<Route path={ '/' }>
				{ commonRoutes }
			</Route>
		</Router>
	</Provider>
);

const rootElem = document.getElementById( "app" );

if (rootElem) {
	render(
		jsx,
		rootElem,
	);
}

