import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

interface GlobalState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  notifications: Notification[]
  currentUser: { id: string; role: string } | null
  
  setTheme: (theme: 'light' | 'dark') => void
  toggleSidebar: () => void
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  setCurrentUser: (user: GlobalState['currentUser']) => void
}

/**
 * Global Store
 * 
 * App-wide state management using Zustand + Immer
 * 
 * Features:
 * - theme: Light/dark mode toggle
 * - sidebarOpen: Sidebar visibility
 * - notifications: App notifications
 * - currentUser: Authenticated user context
 * 
 * Usage:
 * const { theme, setTheme } = useGlobalStore()
 */
export const useGlobalStore = create<GlobalState>()(
  immer((set) => ({
    theme: 'light',
    sidebarOpen: true,
    notifications: [],
    currentUser: null,
    
    setTheme: (theme) => set((state) => {
      state.theme = theme
    }),
    
    toggleSidebar: () => set((state) => {
      state.sidebarOpen = !state.sidebarOpen
    }),
    
    addNotification: (notification) => set((state) => {
      state.notifications.push({
        id: Math.random().toString(),
        ...notification,
      })
    }),
    
    removeNotification: (id) => set((state) => {
      state.notifications = state.notifications.filter(n => n.id !== id)
    }),
    
    setCurrentUser: (user) => set((state) => {
      state.currentUser = user
    }),
  }))
)
