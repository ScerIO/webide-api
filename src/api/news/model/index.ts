import MongooseDB from 'database'
import {
  prop,
  Typegoose,
  InstanceType,
  plugin,
} from 'typegoose'
import INews from 'api/news/interface'
import * as paginate from 'mongoose-paginate'
import { PaginateOptions } from 'mongoose'

export interface IPageinateResult<T> {
  docs: [InstanceType<T>]
  total?: number
  limit?: number
}

/**
 * User model
 */
@plugin(paginate)
export class NewsModel extends Typegoose implements INews {
  /**
   * Paginate
   */
  public static paginate: <T>(query: any, options: PaginateOptions) => Promise<IPageinateResult<T>>
  /**
   * Image
   * *
   * @type {string}
   */
  @prop({ required: true })
  public image: string
  /**
   * Title
   * *
   * @type {string}
   */
  @prop({ required: true })
  public title: string
  /**
   * DEscription
   * *
   * @type {string}
   */
  @prop({ required: true })
  public description: string
  /**
   * Content
   * *
   * @type {string}
   */
  @prop({ required: true })
  public content: string
  /**
   * Create time
   * *
   * @type {string}
   */
  @prop({ required: true })
  public timestamp: string

}

/**
 * User mongoose schema
 * *
 * @const {NewsModel}
 */
export default new NewsModel().getModelForClass(NewsModel, {
  existingMongoose: MongooseDB, schemaOptions: { versionKey: false, id: true },
})
