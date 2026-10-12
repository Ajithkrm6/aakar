import type { StorybookConfig } from '@storybook/react'

/**
 * Storybook Configuration
 * 
 * Auto-discovers all .stories.tsx files in src/
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.{js,jsx,ts,tsx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  docs: { autodocs: 'tag' },
}

export default config
