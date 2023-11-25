import { User } from '@/entities/user'
import { localStorageService } from '@/shared/services/localStorageService'

const userKey = 'current_user'
const accessTokenKey = 'access_token'

interface UseAuthenticatedUser {
  user: User | null
  accessToken: string | null
  isLoggedIn: boolean
  setAuthUserData: (user: User, accessToken: string) => void
  resetAuthUserData: () => void
  setUser: (user: Partial<Omit<User, 'id'>>) => void
  setAccessToken: (accessToken: string) => void
}

export const useAuthenticatedUser = (): UseAuthenticatedUser => {
  const user = localStorageService.getItem<User>(userKey)
  const accessToken = localStorageService.getItem<string>(accessTokenKey)

  const setAuthUserData = (user: User, accessToken: string) => {
    localStorageService.setItem(userKey, user)
    localStorageService.setItem(accessTokenKey, accessToken)
  }

  const resetAuthUserData = () => {
    localStorageService.removeItem(userKey)
    localStorageService.removeItem(accessTokenKey)
  }

  const setUser = (userData: Partial<Omit<User, 'id'>>) => {
    localStorageService.setItem(userKey, { ...user, ...userData })
  }

  const setAccessToken = (accessToken: string) =>
    localStorageService.setItem(accessTokenKey, accessToken)

  return {
    accessToken,
    user,
    isLoggedIn: Boolean(user && accessToken),
    setAccessToken,
    setUser,
    setAuthUserData,
    resetAuthUserData,
  }
}
