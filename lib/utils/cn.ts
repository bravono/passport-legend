import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx support
 * Handles conflicting Tailwind classes by giving precedence to the later values
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
