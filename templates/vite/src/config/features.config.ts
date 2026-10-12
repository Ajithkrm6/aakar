/**
 * Feature Flags Configuration
 * 
 * Usage in components:
 * const isDashboardEnabled = useFeatureGate('dashboard')
 * 
 * if (isDashboardEnabled) {
 *   return <Dashboard />
 * }
 */

export const FEATURES_CONFIG = {
  dashboard: {
    enabled: false,
    description: 'User dashboard',
  },
  analytics: {
    enabled: false,
    description: 'Analytics and metrics',
  },
  profiles: {
    enabled: false,
    description: 'User profiles',
  },
  notifications: {
    enabled: true,
    description: 'Push notifications',
  },
  darkMode: {
    enabled: true,
    description: 'Dark mode theme',
  },
  // Add more features as needed
}

export type FeatureName = keyof typeof FEATURES_CONFIG
