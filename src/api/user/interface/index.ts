import IBase from 'api/base/interface'
import { Role } from 'api/user/role'

/**
 * User
 */
export default interface IUser extends IBase {
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
  role?: Role

  /**
   * Acess key
   * *
   * @type {string}
   */
  token?: string

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

  /**
   * User is admin
   */
  isAdmin?: (...args: any[]) => boolean | boolean
}
