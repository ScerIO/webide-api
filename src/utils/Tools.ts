/**
 * Get unique ID
 * *
 * @return {string} - Unique ID
 */
export function token(): string {
  let token: string = ''
  for(let i = 0; i < 8; i++)
    token += Math.random().toString(36)
  return token
}

/**
 * Get number combination (Example: 642384)
 * *
 * @param {number} [maxLength] - Max length
 * *
 * @return {number} - Result
 */
export function numberCombination(maxLength: number): string {
  let numbers = ''
  for (let i = 0; i < maxLength; i++) {
    numbers += randomInteger(0, 9)
  }
  return numbers
}

/**
 * Generate
 * *
 * @param {number} min - Minimum
 * @param {number} max - Maximum
 * *
 * @return {number} - Result 
 */
export function randomInteger(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min))
}