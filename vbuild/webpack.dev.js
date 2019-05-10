const Path = require('path');
const fs = require("fs");
const path = require('path');
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./util');
const conf = require('./conf');

const host = process.env.HOST || conf.dev.host;
const port = (process.env.PORT && Number(process.env.PORT)) || conf.dev.port;

// var host = webpackConfig.devServer.host;
// var port = webpackConfig.devServer.port;

const webpackConfig = merge(baseWebpack, {
	mode: "development",
	devtool: util.config.dev.devtool,
	output: {
		path: conf.com.outPath,
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	entry: {
		test: "./src/test/test.ts",
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(sa|sc|c)ss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		}]
	},
	devServer: {
		clientLogLevel: 'none',
		hot: true,
		contentBase: false,
		compress: true,
		host: host,
		port: port,
		open: false,
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: conf.dev.proxyTable,
		publicPath: "/",
		quiet: true,
		watchOptions: {
			poll: false,
		},
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrorsPlugin({
			compilationSuccessInfo: { messages: [
				// "----------------------------------------",
				`   server run at: http://${host}:${port} `,
				// "----------------------------------------"
			]},
			// onErrors: util.createNotifierCallback()
		}),
		util.config.com.getDevHtmlConf("app", "index.html"),
		util.config.com.getDevHtmlConf("test", "test.html"),
	]
});

module.exports = webpackConfig;
