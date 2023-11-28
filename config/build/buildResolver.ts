import { BuildPaths } from './types'

export const buildResolver = (paths: BuildPaths) => {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
    alias: {
      '@': paths.src,
    },
  }
}
