import * as mongoose from 'mongoose'
import Log from 'utils/logger'

/**
 * Initialized instance
 */
const dataBase = {
  _instance: null,
  get instance(): typeof mongoose {
    if (this._instance != null) return this._instance
    const {
      DATABASE_HOST: HOST,
      DATABASE_PORT: PORT,
      DATABASE_LOGIN: LOGIN,
      DATABASE_PASSWORD: PASSWORD,
      DATABASE_NAME: NAME,
    } = process.env
    {
      (mongoose as any).Promise = global.Promise
    }
    mongoose.connect(`mongodb://${LOGIN}:${PASSWORD}@${HOST}:${PORT}/${NAME}?authSource=admin`, { useMongoClient: true, promiseLibrary: global.Promise })
      .catch((error) => Log.error('Connect to db: ', error))
    this._instance!! = mongoose
    return this._instance
  },
}

/**
 * Get database instance or create if it not exist
 * *
 * @const {mongoose} MongooseDB
 */
export default (() => dataBase.instance)()
