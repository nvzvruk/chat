import { User } from '@/entities/user'
import { localStorageService } from '@/shared/services/localStorageService'

const currentUserKey = 'current_user'

interface UseAccessToken {
  user: User | null
  setUser: (user: User) => void
  resetUser: () => void
  isLoggedIn: boolean
}

export const useCurrentUser = (): UseAccessToken => {
  const user = localStorageService.getItem<User>(currentUserKey)

  return {
    user,
    isLoggedIn: Boolean(user),
    setUser: (user: User) => localStorageService.setItem(currentUserKey, user),
    resetUser: () => localStorageService.removeItem(currentUserKey),
  }
}
