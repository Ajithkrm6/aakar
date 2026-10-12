import axios from 'axios'

/**
 * API Client
 * 
 * Configured to communicate with .NET backend
 * 
 * Features:
 * - Automatic token injection from localStorage
 * - 401 redirect to login on auth failure
 * - Configurable timeout
 * 
 * Usage:
 * import { apiClient } from '@/lib/api-client'
 * 
 * const { data } = await apiClient.get('/api/users')
 */
export const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 30000,
})

// Request interceptor: Add auth token
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor: Handle 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default apiClient
