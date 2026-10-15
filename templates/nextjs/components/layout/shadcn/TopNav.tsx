'use client'

import Link from 'next/link'
import { Bell, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

interface TopNavProps {
  title?: string
  description?: string
}

/**
 * shadcn-based header without a hard dependency on an authentication provider.
 * Connect application-specific user and logout behavior in the consuming app.
 */
export function TopNav({ title, description }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background shadow-sm" role="banner">
      <div className="flex h-full items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <div className="min-w-0">
            {title && <h1 className="truncate text-sm font-semibold">{title}</h1>}
            {description && <p className="truncate text-xs text-muted-foreground">{description}</p>}
          </div>
          <Link href="/" className="sr-only">Home</Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button type="button" variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" aria-label="Log out">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
