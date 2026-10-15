'use client'

import Link from 'next/link'
import { Menu, Settings, LogOut } from 'lucide-react'
import styles from './Layout.module.css'

interface TopNavProps {
  onMenuClick?: () => void
  userName?: string
}

export function TopNav({ onMenuClick, userName = 'User' }: TopNavProps) {
  return (
    <header className={styles.topNav}>
      <div className={styles.navActions}>
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={onMenuClick}
          className={styles.iconButton}
        >
          <Menu size={20} />
        </button>
        <Link href="/" className={styles.brand}>App</Link>
      </div>
      <div className={styles.navActions}>
        <span>{userName}</span>
        <button type="button" aria-label="Settings" className={styles.iconButton}>
          <Settings size={20} />
        </button>
        <button type="button" aria-label="Log out" className={styles.iconButton}>
          <LogOut size={20} />
        </button>
      </div>
    </header>
  )
}
