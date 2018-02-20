import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator/lib'
import AuthController from 'auth/controller'
import IUser from 'user/interface'
import User from 'user/schema'

type UserPromise = Promise<IUser | null>

@ObjectType()
export class AuthMutation {

  private authController = new AuthController()

  @Field({
    type: User,
    description: 'Google sign in',
  })
  googleSign(@Arg({ name: 'token', description: 'Google access key', nonNull: true }) token: string): UserPromise {
    return this.authController.googleSign(token)
  }

  @Field({
    type: User,
    description: 'Sign in by token',
  })
  signIn(@Arg({ name: 'token', description: 'Access key', nonNull: true }) token: string): UserPromise {
    return this.authController.signIn(token)
  }
}
