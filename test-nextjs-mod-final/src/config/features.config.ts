/**
 * Feature Gates Configuration
 * 
 * Feature flags for module and feature management.
 * Enable/disable features dynamically without code changes.
 * 
 * Usage:
 * import { featureGate } from '@/lib/feature-gate'
 * 
 * if (featureGate.isEnabled('auth')) {
 *   // Render module component
 * }
 */

export const FEATURE_FLAGS = {
  'auth': { name: 'Auth', enabled: true, stage: 'core' },
  'dashboard': { name: 'Dashboard', enabled: true, stage: 'core' }
} as const

export type FeatureKey = keyof typeof FEATURE_FLAGS
