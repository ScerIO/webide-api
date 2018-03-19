import MongooseDB from 'database'
import {
  prop,
  instanceMethod,
  Typegoose,
} from 'typegoose'
import token from 'utils/token'
import { Role } from 'api/user/Role'
import IUser from 'api/user/interface'

/**
 * User model
 */
export class UserModel extends Typegoose implements IUser {
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
  @prop({ required: true, unique: true, default: token })
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
  /**
   * User is admin
   * *
   * @return {boolean}
   */
  @instanceMethod
  public isAdmin(): boolean {
    return this.role === Role.Admin
  }
}

/**
 * User mongoose schema
 * *
 * @const {UserModel}
 */
export default new UserModel().getModelForClass(UserModel, {
  existingMongoose: MongooseDB, schemaOptions: { versionKey: false, id: true },
})
