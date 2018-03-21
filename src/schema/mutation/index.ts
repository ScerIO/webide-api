import AuthController from 'api/auth/controller'
import AuthMutation from 'api/auth/mutation'
import NewsMutation from 'api/news/mutation'
import { UserModel } from 'api/user/model'
import UserMutation from 'api/user/mutation'
import {
  Arg,
  Field,
  ObjectType,
} from 'graphql-schema-decorator/lib'
import {
  SCHEMA_AUTH,
  SCHEMA_NEWS,
  SCHEMA_USER,
} from 'schema/description'

@ObjectType()
export default class RootMutation {
  /**
   * Auth controller
   */
  private readonly authController = new AuthController()

  @Field({
    type: AuthMutation,
    description: SCHEMA_AUTH,
  })
  public auth(): number {
    return 0
  }

  @Field({
    type: UserMutation,
    description: SCHEMA_USER,
  })
  public async user(@Arg({ name: 'token', nonNull: true }) token: string): Promise<UserModel> {
    return await this.authController.signIn(token)
  }

  @Field({
    type: NewsMutation,
    description: SCHEMA_NEWS,
  })
  public news(): number {
    return 0
  }
}
