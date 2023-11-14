import Cookies from 'js-cookie'

const tokenKey = 'access_token'

interface UseAccessToken {
  token: string | undefined
  setToken: (token: string) => void
  removeToken: () => void
}

export const useAccessToken = (): UseAccessToken => {
  const token = Cookies.get(tokenKey)

  return {
    token,
    setToken: (token: string) => Cookies.set(tokenKey, token),
    removeToken: () => Cookies.remove(tokenKey),
  }
}
