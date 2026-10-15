/**
 * Side Navigation Component
 * Collapsible sidebar for main application sections.
 * Uses Tailwind CSS only and does not require shadcn/ui.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Settings,
  LogOut,
  ChevronLeft,
  Users,
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
}

interface SideNavProps {
  isOpen?: boolean
  onClose?: () => void
  navItems?: NavItem[]
  className?: string
}

const defaultNavItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { href: '/team', label: 'Team', icon: <Users className="h-5 w-5" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
]

export const SideNav: React.FC<SideNavProps> = ({
  isOpen = true,
  onClose,
  navItems = defaultNavItems,
  className = '',
}) => {
  const pathname = usePathname()
  const iconButtonClass =
    'inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r bg-white transition-transform duration-200 md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${className}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className={`${iconButtonClass} md:hidden`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${pathname === item.href ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <LogOut className="h-5 w-5" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default SideNav
