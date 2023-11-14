import { type FC, ReactNode } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import { Header } from '@/widgets/Header'

interface PageLayoutProps {
  sidebarContent: ReactNode
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({
  sidebarContent,
  children,
}) => {
  return (
    <div className="flex gap-4 p-4 w-full h-full">
      <aside className="w-2/5 lg:w-1/4">
        <Sidebar />
      </aside>

      <div className="flex flex-col gap-4 grow">
        <header className="w-full flex flex-col gap-4">
          <Header />
        </header>
        {children}
      </div>
    </div>
  )
}
