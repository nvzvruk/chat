import { ReactNode } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAuthenticatedUser } from '@/features/auth'
import { Loader } from '@/shared/ui/loader'
import { routes } from './config'

export const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const { isLoggedIn } = useAuthenticatedUser()

  if (isLoggedIn) return element

  return <Navigate to="/login" />
}

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    routes.map(({ requireAuth, path, element }) => {
      const _element = requireAuth ? (
        <PrivateRoute element={element} />
      ) : (
        element
      )

      return <Route path={path} element={_element} key={path} />
    })
  )
)

export const AppRouter = () => (
  <RouterProvider fallbackElement={<Loader />} router={appRouter} />
)
