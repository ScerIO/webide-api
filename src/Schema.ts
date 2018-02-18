import { 
  Schema, 
  Query, 
  Mutation,
  schemaFactory, 
  ObjectType, 
  Field, 
  Arg
} from 'graphql-schema-decorator/lib'
import { UserQuery } from './user/schemas/User'
import { AuthMutation } from './auth/mutations/Auth'
import { UserMutation } from './user/mutations/User'

import { User } from './user/models/User'
import AuthController from './auth/controllers/Auth'

@ObjectType()
class QueryType {
  @Field({ 
    type: UserQuery, 
    description: 'Операции с пользователем' 
  })
  public user(@Arg({name: 'token', nonNull: true}) token: string): Promise<User|null> {
    // return AuthController.tokenAuth(token)
    return new Promise(() => null)
  }
}

@ObjectType()
class MutationType {
  @Field({
    type: AuthMutation, 
    description: 'Операции с авторизацией'
  })
  public auth(): number {
    return 0
  }
  
  @Field({
    type: UserMutation, 
    description: 'Операции с пользователем'
  })
  public async user(@Arg({name: 'token', nonNull: true}) token: string): Promise<User|null> {
    // return await AuthController.tokenAuth(token)
    return await null
  }
}

@Schema()
export class SchemaType {
  @Query()
  public query: QueryType

  @Mutation()
  public mutation: MutationType
}

/**
 * Main schema
 * *
 * @const {GraphQLSchema}
 */
export const schema = schemaFactory(SchemaType)