import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * LayoutPrimaryChild Props Interface
 * @interface LayoutPrimaryChildProps
 */
interface LayoutPrimaryChildProps {
  /** Main content to render */
  children: ReactNode
  /** Optional CSS class names */
  className?: string
  /** Whether to show gradient background */
  showGradient?: boolean
}

/**
 * LayoutPrimaryChild Component
 *
 * Content wrapper that provides consistent padding and styling
 * for the main content area. Implements professional spacing
 * and gradient background options.
 *
 * Features:
 * - Consistent padding across all breakpoints
 * - Optional gradient background
 * - Scrollable content area
 * - Semantic HTML (main, article, section)
 *
 * @component
 * @example
 * ```tsx
 * <LayoutPrimaryChild className="space-y-4" showGradient>
 *   <h1>Welcome</h1>
 *   <p>Your content here</p>
 * </LayoutPrimaryChild>
 * ```
 *
 * @param {LayoutPrimaryChildProps} props - Component props
 * @returns {React.ReactElement}
 */
export function LayoutPrimaryChild({
  children,
  className,
  showGradient = true,
}: LayoutPrimaryChildProps) {
  return (
    <main
      className={cn(
        'flex-1 overflow-auto scroll-smooth',
        'p-4 sm:p-6 lg:p-8',
        showGradient && 'bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950',
        className
      )}
      role="main"
      aria-label="Page content"
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  )
}
