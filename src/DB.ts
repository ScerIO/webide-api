import * as mongoose from 'mongoose'
import Log from './utils/Logger'

/**
 * Initialized instance
 */
const DataBase = {
  _instance: null,
  get instance() {
    if (this._instance != null) return this._instance
    const {
      DATABASE_HOST: HOST,
      DATABASE_PORT: PORT,
      DATABASE_NAME: NAME
    } = process.env

    {
      (<any>mongoose).Promise = global.Promise
    }

    mongoose.connect(`mongodb://${HOST}:${PORT}/${NAME}`, { useMongoClient: true, promiseLibrary: global.Promise })
      .catch((error) => Log.error('Connect to db: ', error))
    this._instance = mongoose
    return this._instance
  }
}

/**
 * Get database instance or create if it not exist
 * *
 * @const {mongoose} MongooseDB
 */
export default (() => DataBase.instance)()