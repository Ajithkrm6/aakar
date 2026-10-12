import axios, { AxiosInstance, AxiosError } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000')

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if needed
        const token = localStorage.getItem('auth_token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle 401 Unauthorized
        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  get<T = any>(url: string, config?: any) {
    return this.client.get<T>(url, config)
  }

  post<T = any>(url: string, data?: any, config?: any) {
    return this.client.post<T>(url, data, config)
  }

  put<T = any>(url: string, data?: any, config?: any) {
    return this.client.put<T>(url, data, config)
  }

  patch<T = any>(url: string, data?: any, config?: any) {
    return this.client.patch<T>(url, data, config)
  }

  delete<T = any>(url: string, config?: any) {
    return this.client.delete<T>(url, config)
  }
}

export const apiClient = new ApiClient()
