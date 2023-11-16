import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Root, Thumb } from '@radix-ui/react-switch'
import { useTheme } from '@/features/theme'

export const ToggleThemeMode = () => {
  const { mode, toggleMode } = useTheme()
  const checked = mode === 'light'

  const icon = checked ? (
    <SunIcon className="absolute left-1 w-5 fill-white" />
  ) : (
    <MoonIcon className="absolute right-1 w-4" />
  )

  return (
    <Root
      checked={checked}
      onCheckedChange={toggleMode}
      className="relative peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
    >
      {icon}
      <Thumb className="absolute pointer-events-none block w-5 h-5 rounded-full bg-white shadow-lg ring-0 data-[state=checked]:right-0 data-[state=unchecked]:left-0"></Thumb>
    </Root>
  )
}
