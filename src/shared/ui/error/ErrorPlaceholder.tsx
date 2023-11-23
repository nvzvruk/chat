import { type FC } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface LoaderProps {
  message: string
}

export const ErrorPlaceholder: FC<LoaderProps> = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <ExclamationTriangleIcon />
      <h4>{message}</h4>
    </div>
  )
}
