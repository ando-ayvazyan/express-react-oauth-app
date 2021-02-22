import express from "express";
import {RoutesConfig} from "./config/routes.config";
import {MarkupRoutes} from "./markup.routes";

const routes: Array<RoutesConfig> = [];

const configureRoutes = (app: express.Application) => {
	routes.push(new MarkupRoutes(app));
};

export {
	routes,
	configureRoutes,
};