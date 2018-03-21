import randomString from '../randomString'

/**
 * Get unique ID
 */
export default function token(): string {
  return randomString(8)
}
