import * as path from 'path'
import { Configuration } from 'webpack'
import 'webpack-dev-server'
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types'

export function createWebpackConfig({
  mode,
  port,
  isDev,
}: BuildOptions): Configuration {
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../build'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      preferAbsolute: true,
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ],
    devServer: {
      compress: true,
      port: port,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, '../public'),
      },
    },
  }
}
