import { createContext } from 'react'

export interface FeatureGateContextType {
  gates: Record<string, boolean>
  isEnabled: (featureName: string) => boolean
}

export const FeatureGateContext = createContext<FeatureGateContextType | null>(null)
