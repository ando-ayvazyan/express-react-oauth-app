import express from 'express';
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {HtmlComponent} from "client/components/html.component";
import {CONSTANT_MAIN} from "common/constant/main.constant";

const index = async (req: express.Request, res: express.Response) => {
    const scripts = ['/client.js'];

    const html = renderToStaticMarkup(
        <HtmlComponent
            children={''}
            scripts={scripts}
        />
    );

    res.setHeader("Content-Security-Policy", `script-src 'nonce-${CONSTANT_MAIN.SCRIPT_SRC_NONCE_KEY}'`);
    res.send(`<!doctype html>${html}`);
};

export {
    index,
};
