import { type FC } from 'react'
import { Card } from '@/shared/ui/card'
import { type User } from '../type'
import { UserAvatar } from './UserAvatar'

interface UserListProps {
  users: User[]
}

export const UserList: FC<UserListProps> = ({ users }) => {
  const renderUser = ({ id, name }: User) => (
    <Card key={id} className="flex items-center gap-4 p-4">
      <UserAvatar username={name} />
      <p className="text-sm font-medium leading-none">{name}</p>
    </Card>
  )

  return (
    <div className="flex flex-col gap-4 px-4 h-full overflow-y-scroll">
      {users.map(renderUser)}
    </div>
  )
}
