/**
 * Spacing scale — base-4 grid.
 * Each step is a multiple of 4 following the same naming as Tailwind CSS.
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 48,
} as const;

/**
 * Border-radius scale.
 * Use `full` for pills and circles.
 */
export const radii = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  "2xl": 24,
  full: 999,
} as const;

export type Spacing = typeof spacing;
export type Radii = typeof radii;
