type Mode = 'development' | 'production'

export interface BuildOptions {
  mode: Mode
  port: number
  isDev: boolean
}
