'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { SideNav } from './SideNav'
import { TopNav } from './TopNav'
import { LayoutPrimaryChild } from './LayoutPrimaryChild'

export function PrimaryLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 md:flex-row">
      <div className="md:hidden">
        <TopNav onMenuClick={() => setMenuOpen((open) => !open)} />
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
        <SideNav />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="hidden md:block">
          <TopNav />
        </div>
        <LayoutPrimaryChild>{children}</LayoutPrimaryChild>
      </div>
    </div>
  )
}
