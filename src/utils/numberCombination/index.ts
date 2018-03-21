import randomInteger from '../randomInteger'

/**
 * Get number combination (Example: 642384)
 * *
 * @param maxLength - Max length
 */
export default function numberCombination(maxLength: number = 10): string {
  let numbers = ''
  for (let i = 0; i < maxLength; i++) {
    numbers += randomInteger(0, 9)
  }
  return numbers
}
