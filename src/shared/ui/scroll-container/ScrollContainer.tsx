import { type FC, ReactNode } from 'react'

interface ScrollContainerProps {
  children: ReactNode
}

export const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => {
  return (
    <div id="scroll" className="flex grow overflow-hidden">
      <div>{children}</div>
    </div>
  )
}
