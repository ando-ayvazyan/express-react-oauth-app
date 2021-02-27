import express from 'express';
import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { HtmlComponent } from "client/components/html/html.component";
import { CONSTANT_MAIN } from "common/constant/main.constant";

const index = async (req: express.Request, res: express.Response) => {
    const scripts = ['/client.js'];
    const styles = ['/app.css'];
    let markupBody = <></>;

    // override markupBody based on page in ssr

    const html = renderToStaticMarkup(
        <HtmlComponent
            children={renderToString(markupBody)}
            scripts={scripts}
            styles={styles}
        />
    );

    res.setHeader("Content-Security-Policy", `script-src 'nonce-${CONSTANT_MAIN.SCRIPT_SRC_NONCE_KEY}'`);
    res.send(`<!doctype html>${html}`);
};

export {
    index,
};
