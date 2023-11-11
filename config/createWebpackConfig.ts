import { loader as miniCssLoader } from 'mini-css-extract-plugin'
import * as path from 'path'
import { Configuration } from 'webpack'
import 'webpack-dev-server'
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
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
            isDev ? 'style-loader' : miniCssLoader,
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
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
    devServer: {
      compress: true,
      port: port,
      static: {
        directory: path.join(__dirname, '../public'),
      },
    },
  }
}
