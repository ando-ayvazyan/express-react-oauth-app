import express from 'express';
import {EHttpStatusCode} from "../../common/enum/http.enum";
import {APP_EXTERNAL_ROUTES, APP_ROUTES} from "../../common/constant/appRoutes.constant";
import {formatTextPattern} from "../helper/text.hlper";
import {sendSomethingWrongMessage} from "server/helper/response.helper";

const checkPageAvailability = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.cookies.authorization && req.path !== APP_ROUTES.GITHUB_HANDLER) {
        res.redirect(
            EHttpStatusCode.movePermanently,
            formatTextPattern(APP_EXTERNAL_ROUTES.GITHUB_LOGIN, process.env.GITHUB_CLIENT_ID)
        );
    } else {
        next();
    }
};

const validateAuthCodeExists = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!!req.query.code) {
        next();
    } else {
        sendSomethingWrongMessage(next);
    }
};

export {
    checkPageAvailability,
    validateAuthCodeExists,
};