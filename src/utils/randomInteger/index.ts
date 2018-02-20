/**
 * Generate
 * *
 * @param {number} min - Minimum
 * @param {number} max - Maximum
 * *
 * @return {number} - Result
 */
export default function randomInteger(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
