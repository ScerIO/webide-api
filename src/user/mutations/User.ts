import { GraphQLBoolean } from 'graphql'
import { 
  ObjectType, 
  InputObjectType,
  Field, 
  Root,
  Arg 
} from 'graphql-schema-decorator/lib'
import { UserType } from '../schemas/User'
import UserController from '../controllers/User'

@InputObjectType()
class DataForEditFirstName {
  @Field({ nonNull: true }) 
  public firstName: string
}

@InputObjectType()
class DataForEditPhone {
  @Field({ nonNull: true }) 
  public phone: string
}

@ObjectType()
export class UserMutation {
  @Field({ 
    type: GraphQLBoolean,
    description: 'Изменение имени пользователя'
  })
  public editFirstName(@Root() { token }: UserType, @Arg({name: 'input', nonNull: true}) { firstName }: DataForEditFirstName): Promise<boolean> {
    // return UserController.editFirstName({ token, firstName })
    // TODO: Add feature
    return new Promise(() => false)
  }
}