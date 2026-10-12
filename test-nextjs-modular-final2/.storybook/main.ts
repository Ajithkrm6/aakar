import type { StorybookConfig } from '@storybook/nextjs'

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
  framework: '@storybook/nextjs',
  docs: { autodocs: 'tag' },
}

export default config
