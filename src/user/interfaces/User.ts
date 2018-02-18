import { Role } from '../../enums/Role'

/**
 * User
 */
export interface User {
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