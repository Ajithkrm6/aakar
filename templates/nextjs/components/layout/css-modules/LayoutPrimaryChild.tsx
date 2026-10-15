import type { ReactNode } from 'react'
import styles from './Layout.module.css'

interface LayoutPrimaryChildProps {
  children: ReactNode
  className?: string
}

export function LayoutPrimaryChild({ children, className = '' }: LayoutPrimaryChildProps) {
  return (
    <main className={`${styles.main} ${className}`}>
      <div className={styles.content}>{children}</div>
    </main>
  )
}
