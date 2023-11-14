import { type FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'

interface UserAvatarProps {
  username: string
  src?: string
}

export const UserAvatar: FC<UserAvatarProps> = ({ username, src }) => {
  const fallbackText = username.substring(0, 2).toUpperCase()

  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  )
}
