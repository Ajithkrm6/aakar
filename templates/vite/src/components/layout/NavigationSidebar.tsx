import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  LayoutDashboard,
  Home,
  Users,
  Settings,
  FileText,
  Briefcase,
  TrendingUp,
  BarChart3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

/**
 * Submenu Item Interface
 * @interface SubmenuItem
 */
interface SubmenuItem {
  /** Display label for the submenu item */
  label: string
  /** URL path for navigation */
  href: string
  /** Optional badge text */
  badge?: string
  /** Optional badge color variant */
  badgeVariant?: 'default' | 'pro' | 'beta' | 'beta-s1' | 'beta-s2' | 'beta-s3' | 'beta-s4' | 'beta-s5'
  /** Optional feature flag key */
  featureGate?: string
}

/**
 * Navigation Item Interface
 * @interface NavItem
 */
interface NavItem {
  /** Icon component to display */
  icon: React.ReactNode
  /** Display label for the navigation item */
  label: string
  /** URL path for navigation (optional if has submenu) */
  href?: string
  /** Optional badge text (e.g., "Pro", "Beta") */
  badge?: string
  /** Optional badge color variant */
  badgeVariant?: 'default' | 'pro' | 'beta' | 'beta-s1' | 'beta-s2' | 'beta-s3' | 'beta-s4' | 'beta-s5'
  /** Optional submenu items for collapsible sections */
  submenu?: SubmenuItem[]
  /** Optional feature flag key for conditional visibility */
  featureGate?: string
}

/**
 * Sidebar Props Interface
 * @interface NavigationSidebarProps
 */
interface NavigationSidebarProps {
  /** Whether sidebar is expanded or collapsed */
  isOpen?: boolean
  /** Callback when toggle button is clicked */
  onToggle?: () => void
  /** Custom CSS class names */
  className?: string
}

/**
 * Navigation items configuration
 * Structured with main sections and submenus
 * Features marked with badges indicate availability per delivery stage
 */
const NAV_ITEMS: NavItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    label: 'Dashboard',
    href: '/dashboard',
    badgeVariant: 'default',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: 'Analytics',
    badge: 'Pro',
    badgeVariant: 'pro',
    submenu: [
      {
        label: 'Overview',
        href: '/analytics',
        badgeVariant: 'default',
      },
      {
        label: 'Metrics',
        href: '/analytics/metrics',
        badgeVariant: 'default',
      },
      {
        label: 'Reports',
        href: '/analytics/reports',
        badge: 'Pro',
        badgeVariant: 'pro',
      },
    ],
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: 'Projects',
    submenu: [
      {
        label: 'Active Projects',
        href: '/projects',
        badgeVariant: 'default',
      },
      {
        label: 'Archived',
        href: '/projects/archived',
        badgeVariant: 'default',
      },
      {
        label: 'Templates',
        href: '/projects/templates',
        badge: 'Beta',
        badgeVariant: 'beta',
      },
    ],
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: 'Team',
    submenu: [
      {
        label: 'Members',
        href: '/team',
        badgeVariant: 'default',
      },
      {
        label: 'Roles',
        href: '/team/roles',
        badgeVariant: 'default',
      },
      {
        label: 'Permissions',
        href: '/team/permissions',
        badge: 'Beta',
        badgeVariant: 'beta',
      },
    ],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: 'Documentation',
    href: '/docs',
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'Settings',
    submenu: [
      {
        label: 'Account',
        href: '/settings/account',
        badgeVariant: 'default',
      },
      {
        label: 'Workspace',
        href: '/settings/workspace',
        badgeVariant: 'default',
      },
      {
        label: 'Integrations',
        href: '/settings/integrations',
        badge: 'Pro',
        badgeVariant: 'pro',
      },
      {
        label: 'API Keys',
        href: '/settings/api',
        badgeVariant: 'default',
      },
    ],
  },
]

/**
 * Badge variant styles
 */
const badgeVariantStyles: Record<string, string> = {
  default: 'bg-blue-500/10 text-blue-600 border-blue-200',
  pro: 'bg-purple-500/10 text-purple-600 border-purple-200',
  beta: 'bg-orange-500/10 text-orange-600 border-orange-200',
}

/**
 * NavigationSidebar Component
 *
 * Advanced sidebar with:
 * - Collapsible submenu sections
 * - Badge support for Pro/Beta features
 * - Active route highlighting
 * - Smooth animations
 * - Mobile responsive (hides on mobile by default)
 * - Feature gate support for conditional menu items
 *
 * @component
 * @example
 * ```tsx
 * <NavigationSidebar
 *   isOpen={sidebarOpen}
 *   onToggle={() => setSidebarOpen(!sidebarOpen)}
 * />
 * ```
 *
 * @param {NavigationSidebarProps} props - Component props
 * @returns {React.ReactElement}
 */
export function NavigationSidebar({
  isOpen = true,
  className,
}: NavigationSidebarProps) {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  /**
   * Check if route is active
   */
  const isRouteActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  /**
   * Toggle submenu expansion
   */
  const toggleSubmenu = (label: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(label)) {
      newExpanded.delete(label)
    } else {
      newExpanded.add(label)
    }
    setExpandedItems(newExpanded)
  }

  /**
   * Memoized expanded state for active submenu
   */
  const autoExpandActive = useMemo(() => {
    NAV_ITEMS.forEach((item) => {
      if (item.submenu) {
        const hasActiveChild = item.submenu.some((sub) => isRouteActive(sub.href))
        if (hasActiveChild) {
          setExpandedItems((prev) => new Set(prev).add(item.label))
        }
      }
    })
  }, [location.pathname])

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 flex flex-col border-r border-border bg-background transition-all duration-300 h-screen md:static md:translate-x-0',
        isOpen ? 'w-64 translate-x-0' : '-translate-x-full w-64 md:w-20',
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo/Header */}
      <div className="flex items-center border-b border-border p-4 h-16">
        <h2 className={cn('font-bold text-lg', !isOpen && 'md:hidden')}>
          Aakar
        </h2>
        <div className={cn('hidden', !isOpen && 'md:flex md:justify-center md:w-full')}>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            {item.submenu ? (
              // Collapsible Menu Item
              <Collapsible
                open={expandedItems.has(item.label)}
                onOpenChange={() => toggleSubmenu(item.label)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start gap-3',
                      !isOpen && 'md:justify-center md:p-0'
                    )}
                  >
                    {item.icon}
                    <span className={cn('flex-1 text-left', !isOpen && 'md:hidden')}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-xs',
                          !isOpen && 'md:hidden',
                          badgeVariantStyles[item.badgeVariant || 'default']
                        )}
                      >
                        {item.badge}
                      </Badge>
                    )}
                    {!isOpen && (
                      <ChevronDown className={cn('h-4 w-4 transition-transform md:hidden')} />
                    )}
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('space-y-2', !isOpen && 'md:hidden')}>
                  {item.submenu.map((subitem) => (
                    <Link key={subitem.href} to={subitem.href}>
                      <Button
                        variant={isRouteActive(subitem.href) ? 'secondary' : 'ghost'}
                        className="w-full justify-start gap-3 ml-2 pl-6"
                      >
                        <span className="flex-1 text-left text-sm">{subitem.label}</span>
                        {subitem.badge && (
                          <Badge
                            variant="outline"
                            className={cn(
                              'text-xs',
                              badgeVariantStyles[subitem.badgeVariant || 'default']
                            )}
                          >
                            {subitem.badge}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              // Simple Menu Item
              <Link to={item.href!}>
                <Button
                  variant={isRouteActive(item.href!) ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start gap-3',
                    !isOpen && 'md:justify-center md:p-0'
                  )}
                >
                  {item.icon}
                  <span className={cn('flex-1 text-left', !isOpen && 'md:hidden')}>
                    {item.label}
                  </span>
                  {item.badge && (
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-xs',
                        !isOpen && 'md:hidden',
                        badgeVariantStyles[item.badgeVariant || 'default']
                      )}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className={cn('border-t border-border p-4 space-y-2', !isOpen && 'md:hidden')}>
        <p className="text-xs text-muted-foreground px-2">
          Aakar v1.0.0
        </p>
      </div>
    </aside>
  )
}
