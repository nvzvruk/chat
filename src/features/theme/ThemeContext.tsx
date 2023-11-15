import { createContext, ReactNode, useContext, useState } from 'react'
import { localStorageService } from '@/shared/services'
import { useUpdateEffect } from '@/shared/hooks'

type ThemeMode = 'dark' | 'light'

const themeModeKey = 'theme-mode'

interface ContextValue {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeContext = createContext<ContextValue>({
  mode: 'dark',
  toggleMode: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultMode =
    localStorageService.getItem<ThemeMode>(themeModeKey) || 'dark'

  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  const toggleMode = () => {
    setMode((mode) => (mode == 'light' ? 'dark' : 'light'))
  }

  useUpdateEffect(() => {
    localStorageService.setItem(themeModeKey, mode)
  }, [mode])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
