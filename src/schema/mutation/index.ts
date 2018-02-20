import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator/lib'
import { AuthMutation } from 'auth/mutation'
import { UserMutation } from 'user/mutation'

import { User } from 'user/model'

@ObjectType()
export default class RootMutation {
  @Field({
    type: AuthMutation,
    description: 'Операции с авторизацией',
  })
  auth(): number {
    return 0
  }

  @Field({
    type: UserMutation,
    description: 'Операции с пользователем',
  })
  // TODO: Remove string return type
  async user(@Arg({ name: 'token', nonNull: true }) token: string): Promise<User | null | string> {
    // return await AuthController.tokenAuth(token)
    return await token
  }
}
