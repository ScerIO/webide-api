import { Role } from 'user/role'

/**
 * User
 */
export default interface IUser {
  /**
   * Email
   * *
   * @type {string}
   */
  email: string

  /**
   * Role
   * *
   * @type {Role}
   */
  role: Role

  /**
   * Acess key
   * *
   * @type {string}
   */
  token: string

  /**
   * First name
   * *
   * @type {string}
   */
  firstName?: string

  /**
   * Last name
   * *
   * @type {string}
   */
  lastName?: string

  /**
   * Avatar url
   * *
   * @type {string}
   */
  picture?: string
}
