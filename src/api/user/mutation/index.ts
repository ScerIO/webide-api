import UserController from 'api/user/controller'
import {
  USER_CHANGE_FIRST_NAME,
  USER_CHANGE_LAST_NAME,
  USER_CHANGE_PICTURE,
} from 'api/user/description'
import { UserModel } from 'api/user/model'
import UserSchema from 'api/user/schema'
import {
  Arg,
  Field,
  ObjectType,
  Root,
} from 'graphql-schema-decorator'
import { InstanceType } from 'typegoose'

@ObjectType()
export default class UserMutation {
  /**
   * User controller
   */
  private readonly user = new UserController()

  /**
   * Change user first name
   * *
   * @param user
   * @param firstName
   */
  @Field({
    type: UserSchema,
    description: USER_CHANGE_FIRST_NAME,
  })
  public async changeFirstName(
    @Root() user: InstanceType<UserModel>,
    @Arg({name: 'firstName', nonNull: true}) firstName: string,
  ): Promise<UserModel> {
    return this.user.changeFirstName(user, firstName)
  }

  /**
   * Change user last name
   * *
   * @param user
   * @param lastName
   */
  @Field({
    type: UserSchema,
    description: USER_CHANGE_LAST_NAME,
  })
  public async changeLastName(
    @Root() user: InstanceType<UserModel>,
    @Arg({name: 'lastName', nonNull: true}) lastName: string,
  ): Promise<UserModel> {
    return this.user.changeLastName(user, lastName)
  }

  /**
   * Change user picture
   * *
   * @param user
   * @param picture
   */
  @Field({
    type: UserSchema,
    description: USER_CHANGE_PICTURE,
  })
  public async changePicture(
    @Root() user: InstanceType<UserModel>,
    @Arg({name: 'picture', nonNull: true}) picture: string,
  ): Promise<UserModel> {
    return this.user.changePicture(user, picture)
  }
}
