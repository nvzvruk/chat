import { useRef, useCallback, useEffect , useState} from 'react'

export const useDebouncedCallback = <T extends (...args: never[]) => void>(
  callback: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

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

export function useDebouncedValue<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
