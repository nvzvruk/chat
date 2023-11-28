import { Configuration } from 'webpack'
import { BuildOptions } from './types'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildResolver } from './buildResolver'

export function createWebpackConfig({
  mode,
  port,
  paths,
}: BuildOptions): Configuration {
  return {
    mode,
    entry: paths.entry,
    resolve: buildResolver(paths),
    plugins: buildPlugins(mode, paths),
    devServer: buildDevServer(port),
    module: { rules: buildLoaders(mode, paths) },
    output: {
      filename: '[name].bundle.js',
      path: paths.output,
    },
  }
}
