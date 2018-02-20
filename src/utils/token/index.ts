/**
 * Get unique ID
 * *
 * @return {string} - Unique ID
 */
export default function token(): string {
  let tokenTemp: string = ''
  for (let i = 0; i < 8; i++) {
    tokenTemp += Math.random().toString(36)
  }
  return tokenTemp
}
