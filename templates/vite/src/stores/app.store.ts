import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Example store (remove if not needed)
interface AppStore {
  version: string
}

export const useAppStore = create<AppStore>()(
  immer(() => ({
    version: '0.0.1',
  }))
)
