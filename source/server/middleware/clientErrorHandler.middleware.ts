import express from "express";
import {EHttpStatusCode} from "common/enum/http.enum";
import {errorLogger} from "../helper/logger.helper";

const clientErrorHandlerMiddleware = (error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
	let status = error.status || EHttpStatusCode.internalError;
	let message = error.message;

	errorLogger(error.message);

	if (error) {

		if (error.headers) {

			for (const [headerName, headerValue] of Object.entries(error.headers)) {
				res.setHeader(headerName, headerValue as string);
			}

			status = error.status;
		}

		res.status(status).send({ error: message })
	} else {
		next();
	}
};

export {
	clientErrorHandlerMiddleware,
};