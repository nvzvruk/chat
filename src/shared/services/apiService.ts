import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'

const API_BASE_URL = 'http://localhost:3002'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access_token')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export interface ApiServiceError extends AxiosError {}

export const apiService = {
  get: async <T>(url: string, params?: any) => {
    const { data } = await axiosInstance.get<T>(url, { params })
    return data
  },

  post: async <T, P>(url: string, data: P) => {
    const response = await axiosInstance.post<T>(url, data)
    return response.data
  },

  put: async <T>(url: string, data: any) => {
    const response = await axiosInstance.put<T>(url, data)
    return response.data
  },

  delete: async <T>(url: string) => {
    const response = await axiosInstance.delete<T>(url)
    return response.data
  },
}
