import { useMemo, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, LogOut, Settings, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

/**
 * TopNav Props Interface
 * @interface TopNavProps
 */
interface TopNavProps {
  /** Page title for display in header */
  title?: string
  /** Page description for accessibility */
  description?: string
  /** Callback when menu toggle is clicked */
  onMenuToggle?: () => void
  /** Whether sidebar is open */
  sidebarOpen?: boolean
}

/**
 * TopNav Component
 *
 * Professional sticky header navigation with:
 * - Mobile menu toggle button
 * - Page title/breadcrumb
 * - Notifications bell icon
 * - User menu dropdown with avatar
 * - Session-aware rendering
 * - Professional styling with shadcn components
 *
 * @component
 * @example
 * ```tsx
 * <TopNav
 *   title="Dashboard"
 *   description="Team performance metrics"
 *   onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
 *   sidebarOpen={sidebarOpen}
 * />
 * ```
 *
 * @param {TopNavProps} props - Component props
 * @returns {React.ReactElement}
 */
export function TopNav({
  title,
  description,
  onMenuToggle,
  sidebarOpen,
}: TopNavProps) {
  const navigate = useNavigate()

  // UI state
  const [notificationCount, setNotificationCount] = useState(3)

  /**
   * Handle user logout with proper cleanup
   */
  const handleLogout = useCallback(() => {
    try {
      // Clear any session/auth data here
      localStorage.removeItem('auth_token')
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
      navigate('/login')
    }
  }, [navigate])

  /**
   * Memoized user info to prevent unnecessary re-renders
   */
  const userInfo = useMemo(() => ({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    initials: 'JD',
  }), [])

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        'transition-all duration-300'
      )}
      role="banner"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 h-16">
        {/* Left: Menu Toggle & Page Info */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          {onMenuToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="md:hidden"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          {/* Page Title & Description */}
          <div className="hidden sm:flex flex-col">
            {title && (
              <h1 className="text-lg sm:text-xl font-bold text-foreground">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Notifications & User Menu */}
        <div className="flex items-center gap-2">
          {/* Notifications Bell */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </Button>

          {/* User Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                  <AvatarFallback>{userInfo.initials}</AvatarFallback>
                </Avatar>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-sm font-medium">{userInfo.name}</span>
                  <span className="text-xs text-muted-foreground">{userInfo.email}</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* User Info Header */}
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{userInfo.name}</p>
                <p className="text-xs text-muted-foreground">{userInfo.email}</p>
              </div>

              <DropdownMenuSeparator />

              {/* Menu Items */}
              <DropdownMenuItem
                onClick={() => navigate('/settings')}
                className="cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => navigate('/profile')}
                className="cursor-pointer"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Logout */}
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
