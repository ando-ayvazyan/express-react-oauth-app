const configDev = require('./webpack.config.dev');
const configProd = require('./webpack.config.prod');

let resultConfig;

switch (process.env.NODE_ENV) {
	case 'production':
		resultConfig = configProd;
		break;
	default:
		resultConfig = configDev;
}

module.exports = resultConfig;
