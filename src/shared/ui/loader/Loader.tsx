import { type FC } from 'react'

interface LoaderProps {}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-primary" />
    </div>
  )
}
