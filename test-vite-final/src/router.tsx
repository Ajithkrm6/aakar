import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

// Optional: Import auth pages if modular auth is set up
// import { Login } from '@/modules/auth/components'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}

          {/* Protected routes would go here */}
          {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
