import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ProtectedRoute from '@/components/ProtectedRoute'

// Pages
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'

/**
 * Application Router
 * 
 * Route structure:
 * - Public routes: Home, Auth (Login/Signup)
 * - Protected routes: Dashboard (requires authentication)
 * 
 * Layout behavior:
 * - Auth pages: No layout (minimal design)
 * - Public pages: Minimal layout (header only)
 * - Protected pages: Full layout (sidebar + navigation)
 */
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with minimal/no layout */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />

        {/* Main layout routes */}
        <Route element={<Layout />}>
          {/* Public route - Home page */}
          <Route path="/" element={<Home />} />

          {/* Protected routes - Dashboard and future admin pages */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
