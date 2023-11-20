import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useCurrentUser } from '@/features/auth'
import { UserDto } from '@/entities/user'
import { apiService } from '@/shared/services'
import { useAccessToken } from './useAccessToken'

interface SignUpPayload {
  name: string
  email: string
  password: string
}

export const useSignUpForm = () => {
  const navigate = useNavigate()
  const { setUser } = useCurrentUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { setToken } = useAccessToken()

  const { mutate } = useMutation({
    mutationKey: 'signup',
    mutationFn: () =>
      apiService.post<UserDto, SignUpPayload>('/auth/signup', {
        name: username,
        email,
        password,
      }),
    onSuccess: ({ accessToken, ...userData }) => {
      setToken(accessToken)
      setUser(userData)
      navigate('/chat')
    },
  })

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
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
    email,
    password,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
  }
}
