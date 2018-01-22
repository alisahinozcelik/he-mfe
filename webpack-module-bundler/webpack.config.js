const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports= {
	entry: {
		"main": ["src/main.ts"]
	},
	output: {
		path: "dist",
		filename: '[name].js',
		sourceMapFilename: '[file].map',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
		modules: [
			'node_modules'
		],
		alias: {
			"Styles": "src/assets/stylesheets",
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
		new webpack.optimize.UglifyJsPlugin({output: {comments: false}})
	],
	devtool = "source-map"
};

module.exports = {
	serveConfig: merge({}, baseConfig, serveConfig),
	buildConfig: merge({}, baseConfig, buildConfig)
};
