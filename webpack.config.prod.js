const [ configClientCommon, configServerCommon ] = require('./webpack.config.common');
const { merge } = require('webpack-merge');

const mode = 'production';

const configClient = {
	mode,
	devtool: false,
};

const configServer = {
	mode,
	devtool: false,
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
	},
};

module.exports = [ merge(configClientCommon, configClient), merge(configServerCommon, configServer) ];