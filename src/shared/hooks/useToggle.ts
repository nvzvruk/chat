import { useState } from 'react'

type UseToggleResult = [value: boolean, toggle: () => void]

export const useToggle = (initialValue: boolean = false): UseToggleResult => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = (): void => {
    setValue((prevValue) => !prevValue)
  }

  return [value, toggle]
}
