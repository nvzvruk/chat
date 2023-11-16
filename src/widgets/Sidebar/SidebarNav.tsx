import { Link } from 'react-router-dom'
import { HomeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { useAccessToken } from '@/features/auth'
import { HeroIcon, RoutePath } from '@/shared/types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip'

interface SidebarMenuItem {
  path: RoutePath
  icon: HeroIcon
  label: string
}

export const getMenuItems = (isAuth: boolean): SidebarMenuItem[] => {
  const items: SidebarMenuItem[] = [
    { path: '/', icon: HomeIcon, label: 'Home' },
  ]

  if (isAuth)
    items.push({ path: '/chat', icon: ChatBubbleLeftRightIcon, label: 'Chat' })

  return items
}

const NavItem = ({ path, icon: Icon, label }: SidebarMenuItem) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={path} className="block p-4">
            <Icon className="w-5 h-5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-background text-primary">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const SidebarNav = () => {
  const { token } = useAccessToken()
  const menuItems = getMenuItems(Boolean(token))

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={`nav-to-${item.path}`}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
