import { User } from '@/entities/user'
import { localStorageService } from '@/shared/services/localStorageService'

const currentUserKey = 'current_user'

interface UseAccessToken {
  currentUser: User | null
  setCurrentUser: (user: User) => void
  resetCurrentUser: () => void
  isLoggedIn: boolean
}

export const useCurrentUser = (): UseAccessToken => {
  const currentUser = localStorageService.getItem<User>(currentUserKey)

  return {
    currentUser,
    isLoggedIn: Boolean(currentUser),
    setCurrentUser: (user: User) =>
      localStorageService.setItem(currentUserKey, user),
    resetCurrentUser: () => localStorageService.removeItem(currentUserKey),
  }
}
