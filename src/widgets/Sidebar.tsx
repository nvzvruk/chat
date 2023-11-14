import { type FC } from 'react'
import { SearchUsers } from '@/features/search-users'
import { Card } from '@/shared/ui/card'
import { RoutePath } from '@/shared/config'

interface MenuItem {
  path: RoutePath
  label: string
  icon?: any
}

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <Card className="flex h-full rounded-2xl text-white">
      <div className="flex flex-col p-6 bg-primary rounded-bl-2xl rounded-tl-2xl"></div>
      <div className="flex flex-col py-4 grow">
        <SearchUsers />
      </div>
    </Card>
  )
}
