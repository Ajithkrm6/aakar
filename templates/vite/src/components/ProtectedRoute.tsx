import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/modules/auth/store/auth.store'

interface ProtectedRouteProps {
  children: React.ReactNode
}

/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
