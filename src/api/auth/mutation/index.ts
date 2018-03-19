import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator'
import AuthController from 'api/auth/controller'
import IUser from 'api/user/interface'
import User from 'api/user/schema'
import {
  AUTH_GOOGLE_SIGN,
  AUTH_TOKEN_SIGN_IN,
} from 'api/auth/descriptions'

type UserPromise = Promise<IUser | null>

@ObjectType()
export default class AuthMutation {

  private authController = new AuthController()

  @Field({
    type: User,
    description: AUTH_GOOGLE_SIGN,
  })
  public googleSign(
    @Arg({ name: 'token', description: 'Google access key', nonNull: true }) token: string): UserPromise {
    return this.authController.googleSign(token)
  }

  @Field({
    type: User,
    description: AUTH_TOKEN_SIGN_IN,
  })
  public signIn(
    @Arg({ name: 'token', description: 'Access key', nonNull: true }) token: string): UserPromise {
    return this.authController.signIn(token)
  }
}
