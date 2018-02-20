import IApiErrorOptions from './interface'

/**
 * Api error
 * *
 * @class
 */
export default class ApiError extends Error {
  /**
   * Error options
   * *
   * @type {IApiErrorOptions}
   */
  private options: IApiErrorOptions

  /**
   * @constructor
   * *
   * @param {string} message - Error message
   * @param {IApiErrorOptions} options - Error options
   */
  public constructor(message: string, options: IApiErrorOptions) {
    super(message)
    this.options = options
  }

  /**
   * To string
   * *
   * @return {string}
   */
  public toString(): string {
    return `${this.message} \n ErrorCode=${this.options.errorCode}`
  }
}
