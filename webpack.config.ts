import { Configuration } from 'webpack'
import { resolve } from 'path'
import { createWebpackConfig, BuildPaths } from './config/build'

export default function (_, settings): Configuration {
  const mode = settings.mode || 'development'
  const port = settings.port || '3000'
  const paths: BuildPaths = {
    output: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    html: resolve(__dirname, 'public', 'index.html'),
    entry: resolve(__dirname, 'src', 'index.tsx'),
    env: resolve(__dirname),
  }

  return createWebpackConfig({ mode, port, paths })
}
