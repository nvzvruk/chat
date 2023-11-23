import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { UserDto } from '@/entities/user'
import { apiService } from '@/shared/services'
import { useAccessToken } from './useAccessToken'
import { useCurrentUser } from '@/features/auth'

interface LoginPayload {
  username: string
  password: string
}

export const useLoginForm = () => {
  const navigate = useNavigate()
  const { setCurrentUser } = useCurrentUser()
  const { setToken } = useAccessToken()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { mutate } = useMutation({
    mutationKey: 'login',
    mutationFn: () =>
      apiService.post<UserDto, LoginPayload>('/auth/login', {
        username,
        password,
      }),
    onSuccess: ({ accessToken, ...userData }) => {
      setToken(accessToken)
      setCurrentUser(userData)
      navigate('/chat')
    },
  })

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate()
  }

  return {
    username,
    password,
    handleSubmit,
    handlePasswordChange,
    handleNameChange,
  }
}
