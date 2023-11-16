import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store'
import { useAccessToken } from '../hooks/useAccessToken'

export const useLogout = () => {
  const { resetUser } = useAuthStore()
  const { removeToken } = useAccessToken()
  const navigate = useNavigate()

  return () => {
    removeToken()
    resetUser()
    navigate('/login')
  }
}
