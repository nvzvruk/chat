import { type FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { IUser } from '../type'

interface UserAvatarProps {
  user: IUser
}

export const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  const fallbackText = user.firstName[0] + user.lastName[0]

  return (
    <Avatar>
      <AvatarImage src={user.avatarSrc} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  )
}
