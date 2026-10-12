import { useContext } from 'react'
import { FeatureGateContext, FeatureGateContextType } from '@/lib/feature-gate-context'

export function useFeatureGate(featureName: string): boolean {
  const context = useContext(FeatureGateContext)
  
  if (!context) {
    console.warn(`useFeatureGate called outside of FeatureGateProvider`)
    return false
  }

  return context.isEnabled(featureName)
}

export function useFeatureGates(): FeatureGateContextType['gates'] {
  const context = useContext(FeatureGateContext)
  
  if (!context) {
    console.warn(`useFeatureGates called outside of FeatureGateProvider`)
    return {}
  }

  return context.gates
}
