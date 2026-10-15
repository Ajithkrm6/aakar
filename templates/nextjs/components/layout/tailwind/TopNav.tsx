/**
 * Top Navigation Component
 * Main navigation bar displayed at the top of the application.
 * Uses Tailwind CSS only and does not require shadcn/ui.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, LogOut, Settings } from 'lucide-react'

interface TopNavProps {
  onMenuClick?: () => void
  userName?: string
  className?: string
}

export const TopNav: React.FC<TopNavProps> = ({
  onMenuClick,
  userName = 'User',
  className = '',
}) => {
  const iconButtonClass =
    'inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'

  return (
    <header className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur ${className}`}>
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={onMenuClick}
            className={`${iconButtonClass} md:hidden`}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold">Logo</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-600 md:mr-4">
            Welcome, {userName}
          </div>
          <button type="button" aria-label="Settings" className={iconButtonClass}>
            <Settings className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Log out" className={iconButtonClass}>
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopNav
