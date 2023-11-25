import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { UserDto } from '@/entities/user'
import { apiService } from '@/shared/services'
import { useAuthenticatedUser } from './useAuthenticatedUser'

interface LoginPayload {
  username: string
  password: string
}

export const useLoginForm = () => {
  const navigate = useNavigate()
  const { setAuthUserData } = useAuthenticatedUser()
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
      setAuthUserData(userData, accessToken)
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
