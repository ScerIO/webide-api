import { GraphQLBoolean } from 'graphql'
import {
  Arg,
  Field,
  ObjectType,
  Root,
} from 'graphql-schema-decorator'
import User from 'api/user/schema'
import {
  USER_CHANGE_FIRST_NAME,
} from 'api/user/description'

@ObjectType()
export default class UserMutation {
  @Field({
    type: GraphQLBoolean,
    description: USER_CHANGE_FIRST_NAME,
  })
  public editFirstName(@Root() { token }: User,
                       @Arg({name: 'firstName', nonNull: true}) firstName: string): Promise<boolean> {
    // return UserController.editFirstName({ token, firstName })
    // TODO: Add editFirstName
    return new Promise(() => ({ token, firstName }))
  }
}
