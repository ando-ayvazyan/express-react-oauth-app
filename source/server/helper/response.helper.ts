import express from "express";
import path from "path";

const sendSomethingWrongMessage = (nextFn: express.NextFunction) => {
	nextFn({message: `Something went wrong!`});
};

const showSomethingWrongDisclaimer = (res: express.Response) => {
	res.sendFile(path.join((global as any).ROOT_PATH, 'source', 'server', 'pages', 'errorDisclaimer.html'));
};

export {
	sendSomethingWrongMessage,
	showSomethingWrongDisclaimer,
};