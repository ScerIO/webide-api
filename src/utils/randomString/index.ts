/**
 * Get random string
 * *
 * @@param {number} [chunks] - Chunks count
 * *
 * @return {string} - random string
 */
export default function randomString(chunks: number = 1): string {
  let temp: string = ''
  for (let i = 0; i < chunks; i++) {
    temp += Math.random().toString(36)
  }
  return temp
}
