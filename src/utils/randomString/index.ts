/**
 * Get random string
 * *
 * @param chunks - Chunks count
 */
export default function randomString(chunks: number = 1): string {
  let temp: string = ''
  for (let i = 0; i < chunks; i++) {
    temp += Math.random().toString(36)
  }
  return temp
}
