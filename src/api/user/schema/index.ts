import Schema from 'api/base/schema'
import {
  USER,
  USER_EMAIL,
  USER_FIRST_NAME,
  USER_IS_ADMIN,
  USER_LAST_NAME,
  USER_PICTURE,
  USER_ROLE,
  USER_TOKEN,
} from 'api/user/description'
import { Role } from 'api/user/role'
import {
  Field,
  ObjectType,
  Root,
} from 'graphql-schema-decorator'
import IUser from 'site-api/user'

@ObjectType({
  description: USER,
})
export default class UserSchema extends Schema implements IUser {
  @Field({
    nonNull: true,
    description: USER_EMAIL,
  })
  public email: string

  @Field({
    nonNull: true,
    description: USER_TOKEN,
  })
  public token: string

  @Field({
    nonNull: true,
    description: USER_ROLE,
  })
  public role: Role

  @Field({
    description: USER_FIRST_NAME,
  })
  public firstName: string

  @Field({
    description: USER_LAST_NAME,
  })
  public lastName: string

  @Field({
    description: USER_PICTURE,
  })
  public picture: string

  @Field({
    description: USER_IS_ADMIN,
  })
  public isAdmin(@Root() user: this): boolean {
    return user.role === Role.Admin
  }
}
