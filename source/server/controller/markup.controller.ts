import express from 'express';
import path from "path";

const index = async (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve((global as any).ROOT_PATH, 'source', 'server', 'page', 'index.html'));
}

export {
    index,
};
