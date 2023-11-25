import { type FC, ReactNode } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import { Header } from '@/widgets/Header'
import { useAuthenticatedUser } from '@/features/auth'

interface PageLayoutProps {
  sidebarContent?: ReactNode
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const { isLoggedIn } = useAuthenticatedUser()

  if (isLoggedIn) {
    return (
      <div className="flex gap-4 p-4 w-full h-full">
        <aside className="w-3/7 xl:w-1/4">
          <Sidebar />
        </aside>

        <div className="flex flex-col gap-4 grow">
          <Header />
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-full h-full">
      <Header />

      <main className="grow">{children}</main>
    </div>
  )
}
