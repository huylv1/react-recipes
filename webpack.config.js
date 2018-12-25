const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch', './index.js'],
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
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /.(png|jpeg|ico)$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: "body",
            favicon: 'favicon.ico'
        }),

        new Webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
}