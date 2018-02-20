import MongooseDB from 'database'
import {
  prop,
  Typegoose,
} from 'typegoose'
import { Role } from 'user/Role'
import { token } from 'utils'

/**
 * User model
 */
export class User extends Typegoose implements User {
  /**
   * Email
   * *
   * @type {string}
   */
  @prop({ required: true, unique: true })
  public email: string
  /**
   * Access token
   * *
   * @type {string}
   */
  @prop({ required: true, unique: true, default: token() })
  public token: string
  /**
   * Access role
   * *
   * @type {Role}
   */
  @prop({ required: true, enum: Role, default: Role.User })
  public role: Role
  /**
   * Firstname
   * *
   * @type {string}
   */
  @prop()
  public firstName: string
  /**
   * Firstname
   * *
   * @type {string}
   */
  @prop()
  public lastName: string
  /**
   * Avatar url
   * *
   * @type {string}
   */
  @prop()
  public picture: string
}

/**
 * User mongoose schema
 * *
 * @const {User}
 */
export default new User().getModelForClass(User, { existingMongoose: MongooseDB, schemaOptions: { versionKey: false } })
