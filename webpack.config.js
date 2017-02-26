var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {

    entry: [
        './client/index.js'
    ],

    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|bower_components/,
                loader: "babel-loader",
                query: {
                    presets: ['react']
                }
            }

        ]
    },
    plugins: [HtmlWebpackPluginConfig]

}