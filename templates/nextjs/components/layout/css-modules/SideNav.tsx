'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutDashboard, Settings, Users } from 'lucide-react'
import styles from './Layout.module.css'

interface SideNavProps {
  className?: string
}

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function SideNav({ className = '' }: SideNavProps) {
  const pathname = usePathname()

  return (
    <aside className={`${styles.sideNav} ${className}`}>
      <strong>Navigation</strong>
      <nav aria-label="Main navigation">
        <ul className={styles.navList}>
          {items.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
