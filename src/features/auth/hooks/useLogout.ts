import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { apiService } from '@/shared/services'
import { useAuthenticatedUser } from './useAuthenticatedUser'

export const useLogout = () => {
  const { resetAuthUserData } = useAuthenticatedUser()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: 'logout',
    mutationFn: () => apiService.post('/auth/logout', {}),
    onSuccess: () => {
      resetAuthUserData()
      navigate('/login')
    },
  })

  return mutate
}
