import { Configuration } from 'webpack'
import { createWebpackConfig } from "./config/createWebpackConfig";

export default function (_, settings): Configuration {
  const mode = settings.mode  || 'development';
  const port = settings.port || '3000';
  const isDev = mode === 'development'

  return createWebpackConfig({ mode, isDev, port })
}
