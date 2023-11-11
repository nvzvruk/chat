import { IUser } from '@/entities/user'
import { fakeUsers } from './fake-data'

const filterUsers = (users: IUser[], query: string) => {
  if (!query) return users
  else
    return users.filter((user) => {
      // Combine the first name and last name to form the full name
      const fullName = `${user.firstName} ${user.lastName}`

      // Convert the query and full name to lowercase for case-insensitive matching
      const queryLower = query.toLowerCase()
      const fullNameLower = fullName.toLowerCase()

      // Check if the full name contains the query
      return fullNameLower.includes(queryLower)
    })
}

export const getUsers = (query: string): Promise<IUser[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filterUsers(fakeUsers, query))
    }, 500)
  })
