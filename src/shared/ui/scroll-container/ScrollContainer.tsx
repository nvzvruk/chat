import {
  type FC,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react'
import { Loader } from '@/shared/ui/loader'

interface ScrollContainerProps {
  children: ReactNode
}

export const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    const element = containerRef.current
    if (element) {
      console.log('setting height')
      setContainerHeight(element.clientHeight)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-y-scroll"
      style={{ height: containerHeight || '100%' }}
    >
      {containerHeight ? children : <Loader />}
    </div>
  )
}
