export interface IApiErrorOptions {
  /**
   * Error code
   */
  errorCode: number
}

/**
 * Api error
 * *
 * @class
 */
export default class ApiError extends Error {
  /**
   * Error options
   * *
   * @type
   */
  private options: IApiErrorOptions

  /**
   * @constructor
   * *
   * @param message - Error message
   * @param options - Error options
   */
  public constructor(message: string, options: IApiErrorOptions) {
    super(message)
    this.options = options
  }

  /**
   * To string
   */
  public toString(): string {
    return `${this.message} \n ErrorCode=${this.options.errorCode}`
  }
}
