export interface User {
  id: string
  name: string
  email: string
}

export interface UserDto extends User {
  accessToken: string
}
