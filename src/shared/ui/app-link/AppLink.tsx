import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/types'
import { cn } from '@/shared/helpers'

interface AppLinkProps {
  path: RoutePath
  children: ReactNode
  className?: string
}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  path,
  className,
}) => {
  return (
    <Link
      to={path}
      className={cn(
        'text-blue-500 hover:underline hover:text-blue-700',
        className
      )}
    >
      {children}
    </Link>
  )
}
