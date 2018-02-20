import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator/lib'
import User from 'user/schema'
import IUser from 'user/interface'

@ObjectType()
export default class RootQuery {
  @Field({
    type: User,
    description: 'Операции с пользователем',
  })
  user(@Arg({ name: 'token', nonNull: true }) token: string): Promise<IUser | null> {
    return new Promise(() => ({ token }))
  }
}
