
const util = require('./util');
util.config.isProduction = true;

const path = require('path');
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const RemoveStrictPlugin = require('remove-strict-webpack-plugin');
const conf = require('./conf');

const sourceMap = false;

const webpackConfig = merge(baseWebpack, {
	mode: "production",
	devtool: false,
	module: {
		rules: [{
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			}, "css-loader"]
		}, {
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				'sass-loader',
			],
		} ]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					comments: false
				},
				compress: {
					warnings: false
				}
			},
			sourceMap: sourceMap,
			parallel: true
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css' // use contenthash *
		}),
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		new RemoveStrictPlugin(),
		util.config.com.getHtmlConf("app", "index.html"),
	],
	optimization: {
		// chunk for the webpack runtime code and chunk manifest
		runtimeChunk: {
			name: 'manifest'
		},
	}
});

module.exports = webpackConfig