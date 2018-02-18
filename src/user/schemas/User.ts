import { 
  ObjectType, 
  Field,
  Root
} from 'graphql-schema-decorator/lib'
import { Role } from '../../enums/Role'
import { User } from '../interfaces/User'

@ObjectType({
  description: 'Пользователь'
})
export class UserType implements User {
  @Field({
    nonNull: true,
    description: 'email'
  })
  public email: string

  @Field({
    nonNull: true,
    description: 'Access key'
  })
  public token: string

  @Field({
    nonNull: true,
    description: 'Role'
  })
  public role: Role

  @Field({
    description: 'Name'
  })
  public firstName: string

  @Field({
    description: 'Last name (Family name)'
  })
  public lastName: string

  @Field({
    description: 'Avatar image URL'
  })
  public picture: string
}

@ObjectType({
  description: 'Операции с пользователем'
})
export class UserQuery {
  @Field({
    description: 'Информация о пользователе'
  })
  public getInfo(@Root() user: UserType): UserType {
    return user
  }

  @Field({
    description: 'Администратор ли пользователь'
  })
  public isAdmin(@Root() user: UserType): boolean {
    return user.role == Role.Admin
  }
}