const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const mode = 'production';

const common = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, 'source')],
				query: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react',
					],
				},
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							onlyCompileBundledFiles: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		modules: [
			path.resolve('source'),
			path.resolve('node_modules'),
		],
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "./source/static/images", to: "./" },
			],
		}),
	],
};

const clientConfig = {
	...common,
	module: {
		...common.module,
		rules: [
			...common.module.rules,
			{
				test: /\.(svg)$/,
				use: 'xml-loader',
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											// Options
										},
									],
								],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	mode,
	name: 'client',
	target: 'web',
	entry: {
		client: [
			'@babel/polyfill',
			'./source/client/index.tsx',
		],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
	},
	devtool: 'cheap-module-source-map',
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},

};

const serverConfig = {
	...common,
	mode,
	name: 'server',
	target: 'node',
	externals: [nodeExternals()],
	entry: {
		server: ['@babel/polyfill', path.resolve(__dirname, 'index.ts')],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'server.js',
	},
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

module.exports = [clientConfig, serverConfig];