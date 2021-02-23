import express from 'express';
import axios from "axios";
import {APP_EXTERNAL_ROUTES, APP_ROUTES} from "common/constant/appRoutes.constant";
import {sendSomethingWrongMessage} from "server/helper/response.helper";

const authenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const code = req.query.code;
    const client_id = process.env.GITHUB_CLIENT_ID;
    const client_secret = process.env.GITHUB_SECRET_KEY;

    if (code && client_id && client_secret) {
        const data = {
            code,
            client_secret,
            client_id,
        };

        const response = await axios({
            method: "POST",
            url: APP_EXTERNAL_ROUTES.GITHUB_EXCHANGE_TOKEN,
            data,
            headers: {
                accept: 'application/json'
            }
        });
        res.cookie("authorization", response.data.access_token);
        res.redirect(APP_ROUTES.USER);
    } else {
        sendSomethingWrongMessage(next);
    }
};

export {
    authenticate,
};
