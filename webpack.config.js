const configDev = require('./webpack.config.dev');
const { configClientProd, configServerProd } = require('./webpack.config.prod');

let resultConfig;

switch (process.env.NODE_ENV) {
	case 'production':
		resultConfig = [configClientProd, configServerProd];
		break;
	default:
		resultConfig = configDev;
}

module.exports = resultConfig;
