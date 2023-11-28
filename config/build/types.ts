export type Mode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  html: string
  output: string
  src: string
  env: string
}

export interface BuildOptions {
  port: number
  mode: Mode
  paths: BuildPaths
}
