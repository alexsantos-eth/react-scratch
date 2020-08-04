const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							filename: '[name].css',
							ignoreOrder: false,
							chunkFilename: '[name].css',
						},
					},
					'css-loader',
				],
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],
})
