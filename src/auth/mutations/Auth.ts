import { 
  GraphQLBoolean,
  GraphQLString
 } from 'graphql'
import { 
  ObjectType, 
  InputObjectType,
  Field,
  Arg 
} from 'graphql-schema-decorator/lib'
import AuthController from '../controllers/Auth'
import { User } from '../../user/models/User'
import { UserType } from '../../user/schemas/User'

@ObjectType()
export class AuthMutation {

  private authController = new AuthController()

  @Field({ 
    type: UserType,
    description: 'Google sign in'
  })
  public googleSign(@Arg({name: 'token', description: 'Google access key', nonNull: true}) token: string): Promise<User|null> {
    return this.authController.googleSign(token)
  }

  @Field({ 
    type: UserType,
    description: 'Sign in by token'
  })
  public signIn(@Arg({name: 'token', description: 'Access key', nonNull: true}) token: string): Promise<User|null> {
    return this.authController.signIn(token)
  }
}