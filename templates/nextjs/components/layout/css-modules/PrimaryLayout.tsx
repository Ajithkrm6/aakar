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
      <div className={styles.layoutRow}>
        <div className={menuOpen ? styles.sidebarOpen : styles.sidebar}>
          <SideNav />
        </div>
        <LayoutPrimaryChild>{children}</LayoutPrimaryChild>
      </div>
    </div>
  )
}
