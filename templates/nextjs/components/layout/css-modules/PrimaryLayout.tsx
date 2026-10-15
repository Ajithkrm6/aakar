'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { SideNav } from './SideNav'
import { TopNav } from './TopNav'
import { LayoutPrimaryChild } from './LayoutPrimaryChild'
import styles from './Layout.module.css'

export function PrimaryLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <TopNav onMenuClick={() => setMenuOpen((open) => !open)} />
      <div className="aakar-layout-row">
        <div className={menuOpen ? 'aakar-sidebar-open' : 'aakar-sidebar'}>
          <SideNav />
        </div>
        <LayoutPrimaryChild>{children}</LayoutPrimaryChild>
      </div>
      <style jsx>{`
        .aakar-layout-row { display: flex; min-height: calc(100vh - 3.5rem); }
        .aakar-sidebar { display: none; }
        .aakar-sidebar-open { display: block; }
        @media (min-width: 768px) {
          .aakar-sidebar, .aakar-sidebar-open { display: block; }
        }
      `}</style>
    </div>
  )
}
