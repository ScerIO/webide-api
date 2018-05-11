import AuthController from 'api/auth/controller'
import {
  AUTH_GOOGLE_SIGN,
  AUTH_GOOGLE_TOKEN,
  AUTH_TOKEN,
  AUTH_TOKEN_SIGN_IN,
} from 'api/auth/descriptions'
import User from 'api/user/schema'
import {
  Arg,
  Field,
  ObjectType,
} from 'graphql-schema-decorator'
import IUser from 'api/user/interface'

type UserPromise = Promise<IUser | null>

@ObjectType()
export default class AuthMutation {

  /**
   * auth controller
   */
  private readonly auth = new AuthController()

  /**
   * Sign in/up by google token
   * @param token
   */
  @Field({
    type: User,
    description: AUTH_GOOGLE_SIGN,
  })
  public googleSign(
    @Arg({ name: 'token', description: AUTH_GOOGLE_TOKEN, nonNull: true }) token: string,
  ): UserPromise {
    return this.auth.googleSign(token)
  }

  /**
   * Sign in by token
   * *
   * @param token
   */
  @Field({
    type: User,
    description: AUTH_TOKEN_SIGN_IN,
  })
  public signIn(
    @Arg({ name: 'token', description: AUTH_TOKEN, nonNull: true }) token: string,
  ): UserPromise {
    return this.auth.signIn(token)
  }
}
