import { useState, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TopNav } from './TopNav'
import { NavigationSidebar } from './NavigationSidebar'
import { LayoutPrimaryChild } from './LayoutPrimaryChild'
import { cn } from '@/lib/utils'

/**
 * Route Configuration for determining layout visibility
 * Centralized route management following industry best practices
 */
const ROUTE_CONFIG = {
  auth: ['/login', '/signup', '/forgot-password', '/verify'],
  public: ['/'],
  docs: ['/docs', '/api'],
} as const

/**
 * Layout Component
 *
 * Enterprise-grade layout wrapper that manages:
 * - Responsive sidebar (desktop collapsible, mobile overlay)
 * - Professional sticky top navigation
 * - Route-based layout visibility
 * - Session-aware rendering
 * - Mobile/desktop responsiveness
 *
 * Structure:
 * - NavigationSidebar: Left sidebar with navigation items
 * - TopNav: Top header with user menu and notifications
 * - LayoutPrimaryChild: Main content wrapper
 * - Mobile overlay: Click to close sidebar on mobile
 *
 * @component
 * @example
 * ```tsx
 * <Layout>
 *   <Dashboard />
 * </Layout>
 * ```
 *
 * @returns {React.ReactElement}
 */
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  /**
   * Memoized route detection
   * Determines if current page should render the full layout
   */
  const routeStatus = useMemo(() => {
    const isAuthPage = ROUTE_CONFIG.auth.some((route) =>
      location.pathname.startsWith(route)
    )
    const isPublicPage = location.pathname === '/'
    const isDocPage = ROUTE_CONFIG.docs.some((route) =>
      location.pathname.startsWith(route)
    )

    return {
      isAuthPage,
      isPublicPage,
      isDocPage,
      isProtectedPage: !isAuthPage && !isPublicPage && !isDocPage,
    }
  }, [location.pathname])

  /**
   * Determine if layout should be displayed
   * Show full layout only for protected pages
   * Hide for public/auth/doc pages
   */
  const showLayout = useMemo(
    () => routeStatus.isProtectedPage,
    [routeStatus.isProtectedPage]
  )

  // Render children without layout for non-protected pages
  if (!showLayout) {
    return <Outlet />
  }

  return (
    <div
      className={cn(
        'flex h-screen bg-background',
        'overflow-hidden'
      )}
      role="application"
      aria-label="Application layout"
    >
      {/* Navigation Sidebar - Advanced with submenus and feature gates */}
      <NavigationSidebar
        isOpen={sidebarOpen}
      />

      {/* Main Content Area - Flex column layout */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation - Sticky header */}
        <TopNav
          title="Professional Frontend"
          description="Enterprise-grade scaffolding with Vite & React"
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content - Scrollable area */}
        <LayoutPrimaryChild showGradient>
          <Outlet />
        </LayoutPrimaryChild>

        {/* Footer */}
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Aakar - Professional Frontend Scaffolding. Built with React, Vite & shadcn/ui.
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile Overlay - Click to close sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Overlay"
          role="presentation"
        />
      )}
    </div>
  )
}
