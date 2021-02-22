const appLogger = require('debug')('APP');
const errorLogger = appLogger.extend('ERROR');
const serverLogger = appLogger.extend('SERVER');
const routerLogger = appLogger.extend('ROUTER');

export {
	appLogger,
	errorLogger,
	serverLogger,
	routerLogger,
};