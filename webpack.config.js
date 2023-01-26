const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js',
        clean:true,
    },
    resolve: {
                extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
            },
    devtool: 'inline-source-map',
    devServer: {
        port: 3010,
        static: './dist',
        historyApiFallback: true,
        
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
             },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'   
                ],
            },
            {
                test: /\.(?:png|jpg|svg|webp|ico)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({template: './public/index.html'})
    ]
};