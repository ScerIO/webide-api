import * as twilio from 'twilio'
import Log from '../../utils/Logger'
import UserModel, { User } from '../../user/models/User'
import { numberCombination, token } from '../../utils/Tools'
import { Role } from '../../enums/Role'
import { OAuth2Client } from 'google-auth-library'
import { SignIn, SignUp } from '../interfaces/Auth'
import { LoginTicket } from 'google-auth-library/build/src/auth/loginticket'

const {
  GOOGLE_ID,
  GOOGLE_SECRET
} = process.env

/**
 * Auth controller 
 */
export default class {

  private googleOauth2: OAuth2Client = new OAuth2Client(
    GOOGLE_ID,
    GOOGLE_SECRET,
    ''
  )
  
  /**
   * 
   * *
   * @param {} []
   * *
   * @return {boolean} - Status
   */
  public async googleSign(token: string): Promise<User | null> {
    let account: LoginTicket | null = null,
      user: User | null = null
    try {
      account = await this.googleOauth2.verifyIdToken({
        idToken: token,
        audience: GOOGLE_ID || ''
      })
    } catch (error) {
      // Google token lyfecicle end or token broken
    } finally {
      if (!account) return null

      const {
        email = '@error',
        given_name: firstName = '',
        family_name: lastName = '',
        picture = ''
      } = account.getPayload()!!
      let user = await UserModel.findOne({ email })

      if (user === null) user = await UserModel.create({ email, firstName, lastName, picture })

      return user
    }
  }

  /**
   * 
   * *
   * @param {} []
   * *
   * @return {boolean} - Status
   */
  public async signIn(token: string): Promise<User | null> {
      return UserModel.findOne({ token })
  }
}