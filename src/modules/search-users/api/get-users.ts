import { IUserDto } from '@/entities/user'

export const getUsers = async (): Promise<IUserDto[]> => {
  const response = await fetch('http://localhost:3002/user/all')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
