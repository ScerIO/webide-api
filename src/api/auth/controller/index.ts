import UserController from 'api/user/controller'
import { UserModel } from 'api/user/model'
import ApiError from 'error'
import { OAuth2Client } from 'google-auth-library'
import { LoginTicket } from 'google-auth-library/build/src/auth/loginticket'
import { InstanceType } from 'typegoose'

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
  CREATE_USER_ERROR = 0x2,
}

/**
 * Error messages
 */
export enum ErrorMessages {
  INCORRECT_TOKEN = 'Incorrect token',
  CREATE_USER_ERROR = 'Create user error',
}

/**
 * Auth controller
 */
export default class AuthController {
  /**
   * Google OAuth2 client
   */
  private readonly googleOauth2: OAuth2Client = new OAuth2Client(
    GOOGLE_ID,
    GOOGLE_SECRET,
    '', // Redirect url
  )

  /**
   * User controller
   */
  private readonly userController = new UserController()

  /**
   * Google combined Sign In & Sign Up
   * *
   * @param token - Google token
   */
  public async googleSign(token: string): Promise<InstanceType<UserModel>> {
    let account: LoginTicket | null = null,
        user: InstanceType<UserModel> | null = null

    try {
      account = await this.googleOauth2.verifyIdToken({
        idToken: token,
        audience: GOOGLE_ID,
      })
    } catch { /* Google token lyfecicle end or token broken */ }

    // Incorrect google token
    if (!account) throw new ApiError(ErrorMessages.INCORRECT_TOKEN, { errorCode: Errors.INCORRECT_GOOGLE_TOKEN })

    const {
      email = '',
      given_name: firstName = '',
      family_name: lastName = '',
      picture = '',
    } = account.getPayload()!!

    try {
      // Find user by email or create new user
      user = await this.userController.findByEmail(email!!)
          || await this.userController.add({ email, firstName, lastName, picture })
    } catch (error) {
      throw new ApiError(ErrorMessages.CREATE_USER_ERROR, { errorCode: Errors.CREATE_USER_ERROR })
    }

    return user!!
  }

  /**
   * Sign in by api token
   * *
   * @param token - Api token
   */
  public async signIn(token: string): Promise<InstanceType<UserModel>> {
    const user = await this.userController.findByToken(token)
    if (!user) throw new ApiError(ErrorMessages.INCORRECT_TOKEN, { errorCode: Errors.INCORRECT_TOKEN })
    return user
  }
}
