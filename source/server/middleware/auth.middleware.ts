import express from 'express';
import { EHttpStatusCode } from "../../common/enum/http.enum";
import { APP_EXTERNAL_ROUTES, APP_ROUTES } from "../../common/constant/appRoutes.constant";
import { formatApiUrl, formatTextPattern } from "../../common/helper/text.hlper";
import { showSomethingWrongDisclaimer } from "../helper/response.helper";

const checkPageAvailability = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.cookies.authorization && req.path !== APP_ROUTES.GITHUB_HANDLER) {
        res.redirect(
            EHttpStatusCode.movePermanently,
            formatApiUrl(APP_EXTERNAL_ROUTES.GITHUB_LOGIN, process.env.GITHUB_CLIENT_ID)
        );
    } else {
        if (req.path === APP_ROUTES.ROOT) {
            res.redirect(
                EHttpStatusCode.movePermanently,
                APP_ROUTES.USER
            );
        } else {
            next();
        }
    }
};

const validateAuthCodeExists = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!!req.query.code) {
        next();
    } else {
        showSomethingWrongDisclaimer(res);
    }
};

export {
    checkPageAvailability,
    validateAuthCodeExists,
};