import randomString from '../randomString'

/**
 * Get unique ID
 * *
 * @return {string} - Unique ID
 */
export default function token(): string {
  return randomString(8)
}
