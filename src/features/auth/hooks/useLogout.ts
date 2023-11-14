import { useAuthStore } from '../store'
import { useAccessToken } from '../hooks/useAccessToken'

export const useLogout = () => {
  const { resetUser } = useAuthStore()
  const { removeToken } = useAccessToken()

  return () => {
    removeToken()
    resetUser()
  }
}
