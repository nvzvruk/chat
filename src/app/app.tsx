import { Suspense } from 'react'
import { useTheme } from '@/features/theme'
import { cn } from '@/shared/helpers'
import { Loader } from '@/shared/ui/loader'
import { AppRouter } from './router/AppRouter'
import './index.css'

// TODO add shadcn Toast for failed requests
export const App = () => {
  const { mode } = useTheme()

  return (
    <div className={cn('w-screen h-screen bg-background', mode)}>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  )
}
