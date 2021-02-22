import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {configureRoutes} from "./routes";
import {configurePathsHelper} from "./helper/configurePaths.helper";
import {clientErrorHandlerMiddleware} from "./middleware/clientErrorHandler.middleware";
import cors from "cors";
import favicon from "serve-favicon";

const app: express.Application = express();

configurePathsHelper({
	rootPath: path.resolve(__dirname, '../'),
	publicPath:  path.resolve(__dirname, '../public')
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
	limit: "50mb",
	extended: true,
	parameterLimit: 50000
}));

app.use(cors());

app.use(favicon(path.join((global as any).PUBLIC_PATH, 'favicon.ico')));

app.use(express.static((global as any).PUBLIC_PATH));

configureRoutes(app);

app.use(clientErrorHandlerMiddleware);

export {
	app,
};