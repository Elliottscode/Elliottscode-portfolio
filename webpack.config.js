const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: '/src/index.tsx'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3010,
    static: '/dist',
    historyApiFallback: true

  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
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
          { loader: 'style-loader' }, // Step 4: style loader injects the result intho the DOM as a style block
          { loader: 'css-modules-typescript-loader' }, // Step 3: generates a .d.ts module next to the .scss file
          { loader: 'css-loader', options: { modules: true } }, // Step 2: convert css to js to be bundled module true renames css classes in output
          { loader: 'sass-loader' } // Step 1: convert sass to css
        ]
      },
      {
        test: /\.(?:png|jpg|svg|webp|ico)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({ favicon: './public/favicon.ico', template: './public/index.html' })
  ]
}
