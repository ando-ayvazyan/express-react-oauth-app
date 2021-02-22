import express from 'express';
import {EHttpStatusCode} from "../../common/enum/http.enum";
import {APP_EXTERNAL_ROUTES} from "../../common/constant/appRoutes.constant";
import {formatTextPattern} from "../helper/text.hlper";

const checkPageAvailability = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.header('authorization')) {
        next();
    } else {
        res.redirect(
            EHttpStatusCode.movePermanently,
            formatTextPattern(APP_EXTERNAL_ROUTES.GITHUB_LOGIN, process.env.GITHUB_CLIENT_ID)
        );
    }
}

export {
    checkPageAvailability
};