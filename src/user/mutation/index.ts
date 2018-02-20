import { GraphQLBoolean } from 'graphql'
import {
  Arg,
  Field,
  ObjectType,
  Root,
} from 'graphql-schema-decorator/lib'
import User from 'user/schema'

@ObjectType()
export class UserMutation {
  @Field({
    type: GraphQLBoolean,
    description: 'Изменение имени пользователя',
  })
  public editFirstName(@Root() { token }: User,
                       @Arg({name: 'firstName', nonNull: true}) firstName: string): Promise<boolean> {
    // return UserController.editFirstName({ token, firstName })
    // TODO: Add editFirstName
    return new Promise(() => ({ token, firstName }))
  }
}
