import User, { UserModel } from 'api/user/model'
import ApiError from 'error'
import IUser from 'site-api/user'
import { InstanceType } from 'typegoose'
import Logger from 'utils/logger'

/**
 * Error codes
 */
export enum Errors {
  USER_ADD = 0x0,
  USER_EDIT_FIRST_NAME = 0x1,
  USER_EDIT_LAST_NAME = 0x2,
  USER_CHANGE_PICTURE = 0x3,
}

/**
 * Error messages
 */
export enum ErrorMessages {
  USER_ADD = 'Create user error',
  USER_EDIT_FIRST_NAME = 'Edit user first name error',
  USER_EDIT_LAST_NAME = 'Edit user last name error',
  USER_CHANGE_PICTURE = 'Change user picture error',
}

/**
 * User controller
 */
export default class UserController {
  /**
   * Create new user
   * *
   * @param userData
   */
  public async add(userData: IUser): Promise<InstanceType<UserModel>> {
    let user: InstanceType<UserModel> | null = null

    try {
      user = await User.create(userData)
    } catch (error) {
      Logger.error('Create user error: ', error)
      throw new ApiError(ErrorMessages.USER_ADD, { errorCode: Errors.USER_ADD })
    } finally {
      Logger.info(`Create user success. user id: ${user!!.id}`)
    }

    return user
  }

  /**
   * Find exist user by email
   * *
   * @param email
   */
  public async findByEmail(email: string): Promise<InstanceType<UserModel> | null> {
    return User.findOne({ email })
  }

  /**
   * Find exist user by token
   * *
   * @param token
   */
  public async findByToken(token: string): Promise<InstanceType<UserModel> | null> {
    return User.findOne({ token })
  }

  /**
   * Change first name
   * *
   * @param user
   * @param firstName
   */
  public async changeFirstName(user: InstanceType<UserModel>, firstName: string): Promise<InstanceType<UserModel>> {
    try {
      user.firstName = firstName
      await user.save()
    } catch (error) {
      Logger.error('Change first name error: ', error)
      throw new ApiError(ErrorMessages.USER_EDIT_FIRST_NAME, { errorCode: Errors.USER_EDIT_FIRST_NAME })
    } finally {
      Logger.info(`Change first name success. user id: ${user!!.id}`)
    }

    return user
  }

  /**
   * Change last name
   * *
   * @param user
   * @param lastName
   */
  public async changeLastName(user: InstanceType<UserModel>, lastName: string): Promise<InstanceType<UserModel>> {
    try {
      user.lastName = lastName
      await user.save()
    } catch (error) {
      Logger.error('Change last name error: ', error)
      throw new ApiError(ErrorMessages.USER_EDIT_LAST_NAME, { errorCode: Errors.USER_EDIT_LAST_NAME })
    } finally {
      Logger.info(`Change last name success. user id: ${user!!.id}`)
    }

    return user
  }

  /**
   * Change picture
   * *
   * @param user
   * @param picture - Picture URL
   */
  public async changePicture(user: InstanceType<UserModel>, picture: string): Promise<InstanceType<UserModel>> {
    try {
      user.picture = picture
      await user.save()
    } catch (error) {
      Logger.error('Change picture error: ', error)
      throw new ApiError(ErrorMessages.USER_CHANGE_PICTURE, { errorCode: Errors.USER_CHANGE_PICTURE })
    } finally {
      Logger.info(`Change pictur success. user id: ${user!!.id}`)
    }

    return user
  }
}
