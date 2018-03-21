import { Role } from 'api/user/Role'
import MongooseDB from 'database'
import IUser from 'site-api/user'
import {
  instanceMethod,
  prop,
  Typegoose,
} from 'typegoose'
import token from 'utils/token'

/**
 * User model
 */
export class UserModel extends Typegoose implements IUser {
  /**
   * Email
   */
  @prop({ required: true, unique: true })
  public email: string
  /**
   * Access token
   */
  @prop({ required: true, unique: true, default: token })
  public token: string
  /**
   * Access role
   */
  @prop({ required: true, enum: Role, default: Role.User })
  public role: Role
  /**
   * Firstname
   */
  @prop()
  public firstName: string
  /**
   * Firstname
   */
  @prop()
  public lastName: string
  /**
   * Avatar url
   */
  @prop()
  public picture: string
  /**
   * User is admin
   */
  @instanceMethod
  public isAdmin(): boolean {
    return this.role === Role.Admin
  }
}

/**
 * User mongoose schema
 */
export default new UserModel().getModelForClass(UserModel, {
  existingMongoose: MongooseDB, schemaOptions: {
    collection: 'users',
    versionKey: false,
    id: true,
  },
})
