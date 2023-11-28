import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { config } from 'dotenv'
import { BuildPaths, Mode } from './types'

export const buildPlugins = (
  mode: Mode,
  paths: BuildPaths
): WebpackPluginInstance[] => {
  const env = config().parsed

  return [
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new DefinePlugin({
      API_URL: JSON.stringify(env?.API_URL),
      IS_DEV: JSON.stringify(mode === 'development'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ]
}
