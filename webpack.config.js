var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
	],
	module: { //Обновлено
		rules: [
		  {
		  	loader: "eslint-loader",
		  	enforce: "pre",
        test: /\.js$/,
        include: [
					path.resolve(__dirname, "src"),
				]
      },
			{
				loader: ['react-hot-loader/webpack', 'babel-loader'],
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src"),
				]
			},
			{
				loader: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	}
}