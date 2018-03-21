import * as winston from 'winston'

/**
 * Logger instance
 */
const loggerUtil = {
  _instance: null,
  get instance(): winston.LoggerInstance {
    if (this._instance != null) return this._instance

    const {
      NODE_ENV: ENV,
      LOGGER_PATH_COMBINED: PATH_COMBINED,
    } = process.env

    const logger = new winston.Logger({
      transports: [
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({
          filename: PATH_COMBINED,
          json: false,
        }),
      ],
    })

    if (ENV !== 'production') {
      logger.add(winston.transports.Console, {
        colorize: true,
      })
    }

    this._instance = logger
    return this._instance
  },
}

/**
 * Creat Logger (if it exist) and return
 */
export default (() => loggerUtil.instance)()
