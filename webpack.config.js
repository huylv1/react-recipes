const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './bundle.js'        
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: "body"
        })
    ]
}