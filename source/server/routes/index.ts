import express from "express";
import {RoutesConfig} from "./config/routes.config";
import {MarkupRoutes} from "./markup.routes";
import {AuthRoutes} from "./auth.routes";

const routes: Array<RoutesConfig> = [];

const configureRoutes = (app: express.Application) => {
	routes.push(new AuthRoutes(app));
	routes.push(new MarkupRoutes(app));
};

export {
	routes,
	configureRoutes,
};