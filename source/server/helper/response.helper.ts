import express from "express";

const sendSomethingWrongMessage = (nextFn: express.NextFunction) => {
	nextFn({message: `Something went wrong!`});
};

export {
	sendSomethingWrongMessage,
};