const [ configClientCommon, configServerCommon ] = require('./webpack.config.common');
const { merge } = require('webpack-merge');

const mode = 'development';

const configClient = {
	mode,
	devtool: 'cheap-module-source-map',
};

const configServer = {
	mode,
	devtool: 'cheap-module-source-map',
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