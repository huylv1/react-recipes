const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch', './index.js'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /.(png|jpeg|ico)$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            },
        ]
    },
    devServer: {
        historyApiFallback : true
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