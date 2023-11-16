import { SearchUsers } from '@/features/search-users'
import { LogoutButton } from '@/features/auth'
import { Card } from '@/shared/ui/card'
import { SidebarNav } from './SidebarNav'

export const Sidebar = () => {
  return (
    <Card className="flex h-full rounded-2xl text-white">
      <div className="flex flex-col justify-between bg-primary rounded-bl-2xl rounded-tl-2xl py-4">
        <SidebarNav />
        <LogoutButton />
      </div>
      <div className="flex flex-col py-4 grow">
        <SearchUsers />
      </div>
    </Card>
  )
}
