import { localStorageService } from '@/shared/services/localStorageService'

const tokenKey = 'access_token'

interface UseAccessToken {
  token: string | null
  setToken: (token: string) => void
  removeToken: () => void
}

export const useAccessToken = (): UseAccessToken => {
  const token = localStorageService.getItem<string>(tokenKey)

  return {
    token,
    setToken: (token: string) => localStorageService.setItem(tokenKey, token),
    removeToken: () => localStorageService.removeItem(tokenKey),
  }
}
