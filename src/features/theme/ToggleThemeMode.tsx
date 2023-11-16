import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Root, Thumb } from '@radix-ui/react-switch'
import { useTheme } from '@/features/theme'

const modeConfig = {
  light: {
    label: 'LIGHT',
    Icon: SunIcon,
    checked: true,
  },
  dark: {
    label: 'DARK',
    Icon: MoonIcon,
    checked: false,
  },
}

export const ToggleThemeMode = () => {
  const { mode, toggleMode } = useTheme()
  const { label, Icon, checked } = modeConfig[mode]

  return (
    <Root
      checked={checked}
      onCheckedChange={toggleMode}
      className="border border-input h-8 py-1 px-3 relative peer inline-flex shrink-0 cursor-pointer items-center rounded-full shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:pr-10 data-[state=unchecked]:bg-input data-[state=unchecked]:pl-10"
    >
      <p className="flex flex-col items-start line-clamp-1 text-xs text-foreground leading-3">
        <span>{label}</span>
        <span>MODE</span>
      </p>
      <Thumb className="absolute pointer-events-none flex items-center justify-center w-8 h-8 rounded-full bg-primary shadow-lg ring-0 transition-all data-[state=checked]:left-full data-[state=checked]:-translate-x-full data-[state=unchecked]:left-0">
        <Icon className="w-2/3 fill-white" />
      </Thumb>
    </Root>
  )
}
