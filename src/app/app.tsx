import { AppRouter } from './router/AppRouter'
import './index.css'

// TODO add shadcn Toast for failed requests
export const App = () => {
  return (
    <div className="w-screen h-screen">
      <AppRouter />
    </div>
  )
}
