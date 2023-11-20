import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useCurrentUser } from '@/features/auth'
import { apiService } from '@/shared/services'
import { useAccessToken } from '../hooks/useAccessToken'

export const useLogout = () => {
  const { resetUser } = useCurrentUser()
  const { resetToken } = useAccessToken()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: 'logout',
    mutationFn: () => apiService.post('/auth/logout', {}),
    onSuccess: () => {
      resetToken()
      resetUser()
      navigate('/login')
    },
  })

  return mutate
}
