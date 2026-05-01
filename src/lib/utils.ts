import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes without conflicts.
 * Essential for Framer Motion + Tailwind synergy.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}