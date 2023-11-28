import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildPaths, Mode } from './types'

const cssLoaderByMode: Record<Mode, RuleSetRule | string> = {
  development: 'style-loader',
  production: MiniCssExtractPlugin.loader,
}

export const buildLoaders = (mode: Mode, paths: BuildPaths): RuleSetRule[] => [
  {
    test: /\.css$/,
    include: paths.src,
    use: [cssLoaderByMode[mode], 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.(ts|tsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
]
