import { useEffect, useRef, DependencyList } from 'react'

export const useUpdateEffect = (
  callback: () => void,
  dependencies: DependencyList
) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      callback()
    } else {
      isMounted.current = true
    }
  }, dependencies)
}
