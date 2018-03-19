import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator/lib'
import AuthMutation from 'api/auth/mutation'
import UserMutation from 'api/user/mutation'
import NewsMutation from 'api/news/mutation'

import { UserModel } from 'api/user/model'
import {
  SCHEMA_AUTH,
  SCHEMA_USER,
  SCHEMA_NEWS,
} from 'schema/description'

@ObjectType()
export default class RootMutation {
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
  // TODO: Remove string return type
  public async user(@Arg({ name: 'token', nonNull: true }) token: string): Promise<UserModel | null | string> {

    // return await AuthController.tokenAuth(token)
    return await token
  }

  @Field({
    type: NewsMutation,
    description: SCHEMA_NEWS,
  })
  public news(): number {
    return 0
  }
}
