require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json']
                },
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: isProd ? undefined : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env.BOOKS_API_URL': JSON.stringify(process.env.BOOKS_API_URL)
        })
    ]
};
