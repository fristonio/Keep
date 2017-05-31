var path = require('path');

var config = {
	entry: path.resolve(__dirname, 'src') + '/app/index.js',

	output: {
		path: path.resolve(__dirname, 'dist') + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}

module.exports = config;