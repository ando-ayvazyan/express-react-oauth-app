import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { commonRoutes } from "./routes";

const jsx = (
	<Router>
		<Route path={ '/' }>
			{ commonRoutes }
		</Route>
	</Router>
);

ReactDOM.hydrate(
	jsx,
	document.getElementById( "app" ),
);
