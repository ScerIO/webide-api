import {
  ObjectType,
  Field,
  Root,
} from 'graphql-schema-decorator/lib'
import { Role } from 'user/role'
import IUser from 'user/interface'

@ObjectType({
  description: 'Пользователь',
})
export default class User implements IUser {
  @Field({
    nonNull: true,
    description: 'email',
  })
  email: string

  @Field({
    nonNull: true,
    description: 'Access key',
  })
  token: string

  @Field({
    nonNull: true,
    description: 'Role',
  })
  role: Role

  @Field({
    description: 'Name',
  })
  firstName: string

  @Field({
    description: 'Last name (Family name)',
  })
  lastName: string

  @Field({
    description: 'Avatar image URL',
  })
  picture: string

  @Field({
    description: 'Администратор ли пользователь',
  })
  isAdmin(@Root() user: this): boolean {
    return user.role === Role.Admin
  }
}
