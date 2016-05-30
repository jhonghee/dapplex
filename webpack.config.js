module.exports = {
	context: __dirname + "/src",
	entry: {
		background: './background.js',
		popup: './popup/App.js'
	},
	output: {
		path: "./",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
