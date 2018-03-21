/**
 * Generate random number with range
 * *
 * @param min - Minimum
 * @param max - Maximum
 */
export default function randomInteger(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
