import { useRef, useCallback } from 'react'

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  const timerRef = useRef<number | null>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = window.setTimeout(() => {
        callback(...args)
      }, ms)
    },
    [callback, ms]
  )
}
