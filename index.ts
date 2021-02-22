import dotenv from "dotenv";
import http from "http";
import {app} from "./source/server";
import {routes} from "server/routes";
import {RoutesConfig} from "server/routes/config/routes.config";
import {routerLogger, serverLogger} from "./source/server/helper/logger.helper";

const dotenvConfig = dotenv.config();

if (dotenvConfig.error) {
	throw dotenvConfig.error;
}

const normalizePort = (val: any) => {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

const onError = (error: any) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
};

const onListening = () => {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr?.port;
	serverLogger(`Server running at ${bind}`);
	routes.forEach((route: RoutesConfig) => routerLogger(`Routes configured for ${route.getName()}`));
};

const port = normalizePort(process.env.SERVER_PORT || 80);
app.set('port', port);

const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);

export default server.listen(port);