const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['*', '.js', 'json', '.jsx', '.ts', '.tsx'],
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'awesome-typescript-loader',
					},
				],
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
		new webpack.HotModuleReplacementPlugin(),
	],
}
