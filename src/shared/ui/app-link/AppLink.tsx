import React, { ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { RoutePath } from '@/shared/types'

interface AppLinkProps {
  label: string
  icon: ReactElement
  path: RoutePath
}

export const AppLink: React.FC<AppLinkProps> = ({ icon, label, path }) => {
  return (
    <RouterLink
      to={path}
      className="text-blue-500 hover:underline hover:text-blue-700"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </RouterLink>
  )
}
