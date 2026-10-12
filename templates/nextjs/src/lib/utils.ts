import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS class names
 * Combines clsx for conditional classes with twMerge for Tailwind conflict resolution
 * Used throughout the application with shadcn/ui components
 * 
 * @param inputs - Class names to merge
 * @returns Merged class name string
 * 
 * @example
 * cn('px-2 py-1', condition && 'bg-blue-500') // => 'px-2 py-1 bg-blue-500' (if condition true)
 * cn('p-2', 'p-4') // => 'p-4' (Tailwind conflict resolved)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
