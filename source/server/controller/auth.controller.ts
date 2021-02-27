import express from 'express';
import {APP_EXTERNAL_ROUTES, APP_ROUTES} from "common/constant/appRoutes.constant";
import {showSomethingWrongDisclaimer} from "../helper/response.helper";
import {request} from "../../common/helper/request.helper";
import {EHttpStatusCode} from "common/enum/http.enum";

const authenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const code = req.query.code;
    const client_id = process.env.GITHUB_CLIENT_ID;
    const client_secret = process.env.GITHUB_SECRET_KEY;

    if (!client_id || !client_secret) {
        showSomethingWrongDisclaimer(res);
    } else  {
        const data = {
            code,
            client_secret,
            client_id,
        };

        const response = await request(APP_EXTERNAL_ROUTES.GITHUB_EXCHANGE_TOKEN, {
            method: "post",
            body: data,
            headers: {
                accept: 'application/json'
            }
        });

        const access_token = response.access_token;

        if (access_token) {
            res.cookie("authorization", access_token);
            res.redirect(EHttpStatusCode.movePermanently, APP_ROUTES.USER);
        } else {
            showSomethingWrongDisclaimer(res);
        }
    }
};

export {
    authenticate,
};
