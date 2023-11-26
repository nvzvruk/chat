import axios, { AxiosError } from 'axios'
import { localStorageService } from '@/shared/services'
import { AuthError } from '@/shared/config/errorNames'

const API_BASE_URL = 'http://localhost:3002'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorageService.getItem('access_token')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorName = error.response.data.name

    if (errorName === AuthError.AccessTokenExpired) {
      const { data: newToken } = await axiosInstance.post('auth/refresh')
      localStorageService.setItem('access_token', newToken)
    }

    if (errorName === AuthError.RefreshTokenExpired) {
      localStorageService.removeItem('access_token')
    }

    return Promise.reject(error)
  }
)

export interface ApiServiceError extends AxiosError {}

export const apiService = {
  get: async <T, P extends object>(url: string, body?: P) => {
    const { data } = await axiosInstance.get<T>(url, body)
    return data
  },

  post: async <T, P extends object>(url: string, body: P) => {
    const response = await axiosInstance.post<T>(url, body)
    return response.data
  },

  put: async <T, P extends object>(url: string, body: P) => {
    const response = await axiosInstance.put<T>(url, body)
    return response.data
  },

  delete: async <T>(url: string) => {
    const response = await axiosInstance.delete<T>(url)
    return response.data
  },
}
