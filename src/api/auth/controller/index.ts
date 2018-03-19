import User, { UserModel } from 'api/user/model'
import { OAuth2Client } from 'google-auth-library'
import { LoginTicket } from 'google-auth-library/build/src/auth/loginticket'
import ApiError from 'error'

const {
  GOOGLE_ID = '',
  GOOGLE_SECRET = '',
} = process.env

/**
 * Error codes
 */
export enum Errors {
  INCORRECT_TOKEN = 0x0,
  INCORRECT_GOOGLE_TOKEN = 0x1,
}

/**
 * Auth controller
 */
export default class AuthController {

  /**
   * Incorrect token
   */
  public readonly INCORRECT_TOKEN_MESSAGE = 'Incorrect token'

  /**
   * Google OAuth2 client
   * *
   * @type {OAuth2Client}
   * @readonly
   */
  private readonly googleOauth2: OAuth2Client = new OAuth2Client(
    GOOGLE_ID,
    GOOGLE_SECRET,
    '', // Redirect url
  )

  /**
   * Google combined Sign In & Sign Up
   * *
   * @param {string} [token] - Google token
   * *
   * @return {User|null}
   */
  public async googleSign(token: string): Promise<UserModel> {
    let account: LoginTicket | null = null
    try {
      account = await this.googleOauth2.verifyIdToken({
        idToken: token,
        audience: GOOGLE_ID,
      })
    } catch { /* Google token lyfecicle end or token broken */ }

    // Incorrect google token
    if (!account) throw new ApiError(this.INCORRECT_TOKEN_MESSAGE, { errorCode: Errors.INCORRECT_GOOGLE_TOKEN })

    const {
      email,
      given_name: firstName,
      family_name: lastName,
      picture,
    } = account.getPayload()!!

    // Return user by email or create new user
    return await User.findOne({ email }) || await User.create({ email, firstName, lastName, picture })
  }

  /**
   * Sign in by api token
   * *
   * @param {string} [token] - Api token
   * *
   * @return {User|null}
   */
  public signIn = async (token: string): Promise<UserModel> => {
    const user = await User.findOne({ token })
    if (!user) throw new ApiError(this.INCORRECT_TOKEN_MESSAGE, { errorCode: Errors.INCORRECT_TOKEN })
    return user
  }
}
