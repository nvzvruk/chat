import './index.css'
import { AppRouter } from '@/app/router'
import { SearchUsers } from '@/modules/search-users'
import { Card } from '@/shared/ui/card'

export const App = () => {
  return (
    <div className="w-screen h-screen">
      <AppRouter />
    </div>
  )
}
