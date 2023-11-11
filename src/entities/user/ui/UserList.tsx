import { type FC } from 'react'
import { Card } from '@/shared/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar'
import { type IUserDto } from '../type'

interface UserListProps {
  users: IUserDto[]
}

export const UserList: FC<UserListProps> = ({ users }) => {
  const renderUser = ({ id, name }: IUserDto) => (
    <Card key={id} className="flex items-center gap-4 p-4">
      <Avatar>
        <AvatarImage src="/avatars/01.png" />
        <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium leading-none">{name}</p>
    </Card>
  )

  return (
    <div className="flex flex-col gap-4 px-4 h-full overflow-y-scroll">
      {users.map(renderUser)}
    </div>
  )
}
