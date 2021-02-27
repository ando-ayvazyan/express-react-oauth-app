const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
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
};

const configClient = {
	module: {
		rules: [
			{
				test: /\.(svg)$/,
				use: 'xml-loader',
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
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
							sourceMap: true,
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: "app.css"
		}),
		new CopyPlugin({
			patterns: [
				{ from: "./source/static/images", to: "./" },
			],
		}),
	],
};

const configServer = {
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
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
	},
};

module.exports = [ merge(config, configClient), merge(config, configServer) ];
