/**
 * Version utility
 * Dynamically reads framework versions from project's package.json
 * Aakar version is hardcoded as the generator version
 */

import packageJson from '../../package.json'

// Aakar version (generator version - update when aakar is updated)
export const AAKAR_VERSION = '1.1.0'

export const getVersion = () => {
  return AAKAR_VERSION
}

export const getFrameworkVersions = () => {
  return {
    aakar: AAKAR_VERSION,
    nextjs: packageJson.dependencies?.next?.replace('^', '').replace('~', '') || 'latest',
    react: packageJson.dependencies?.react?.replace('^', '').replace('~', '') || 'latest',
    typescript: packageJson.devDependencies?.typescript?.replace('^', '').replace('~', '') || 'latest',
    
  }
}

export const getPackageInfo = () => {
  const versions = getFrameworkVersions()
  return {
    name: packageJson.name || 'Project',
    version: packageJson.version || '1.0.0',
    description: packageJson.description || '',
    generatedWith: `Aakar v${versions.aakar}`,
    frameworks: versions,
  }
}
