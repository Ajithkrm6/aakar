/**
 * Authentication Configuration
 */

export const AUTH_CONFIG = {
  loginPath: '/login',
  redirectPath: '/',
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
  tokenStorageKey: 'auth_token',
  tokenExpiryKey: 'auth_token_expiry',
  refreshTokenKey: 'refresh_token',
  apiTimeout: 30000, // 30 seconds
}

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    me: '/auth/me',
  },
  // Add more endpoints as needed
}
