import { Role } from 'api/user/role'
import IBase from 'api/base/interface'

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
