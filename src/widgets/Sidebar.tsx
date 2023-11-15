import { SearchUsers } from '@/features/search-users'
import { Card } from '@/shared/ui/card'
import { RoutePath } from '@/shared/config'
import { useAccessToken } from '@/features/auth'

interface SidebarMenuItem {
  path: RoutePath
  icon: any
}

const getMenuItems = (isAuth: boolean): SidebarMenuItem[] => {
  const items: SidebarMenuItem[] = [{ path: '/', icon: 'Home' }]

  if (isAuth) items.push({ path: '/chat', icon: 'Chat' })

  return items
}

const MenuItem = (props: SidebarMenuItem) => {
  return <div></div>
}

export const Sidebar = () => {
  const { token } = useAccessToken()
  const menuItems = getMenuItems(Boolean(token))

  return (
    <Card className="flex h-full rounded-2xl text-white">
      <div className="flex flex-col p-6 bg-primary rounded-bl-2xl rounded-tl-2xl"></div>
      <div className="flex flex-col py-4 grow">
        <SearchUsers />
      </div>
    </Card>
  )
}
