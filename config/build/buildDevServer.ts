import type { Configuration } from 'webpack-dev-server'

export const buildDevServer = (port: number): Configuration => ({
  port: port,
  hot: true,
  open: false,
  compress: true,
  historyApiFallback: true,
})
