import { User } from '../../user/interfaces/User'

/**
 * Sign in by email
 */
export interface SignIn {
  /**
   * Email
   * *
   * @type {string}
   */
  email: User['email']
}

/**
 * Sign up
 */
export interface SignUp extends SignIn {
  /**
   * First name
   * *
   * @type {string}
   */
  firstName: User['firstName']

  /**
   * Last name
   * *
   * @type {string}
   */
  lastName: User['lastName']

  /**
   * Avatar url
   */
  picture: User['picture']
}