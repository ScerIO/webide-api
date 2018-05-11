import MongooseDB from 'database'
import { PaginateOptions } from 'mongoose'
import * as paginate from 'mongoose-paginate'
import INews from 'api/news/interface'
import {
  InstanceType,
  plugin,
  prop,
  Typegoose,
} from 'typegoose'

/**
 * Pagination result
 */
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
   */
  @prop({ required: true })
  public image: string
  /**
   * Title
   */
  @prop({ required: true })
  public title: string
  /**
   * Description
   */
  @prop({ required: true })
  public description: string
  /**
   * Content
   */
  @prop({ required: true })
  public content: string
  /**
   * Create time
   */
  @prop({ required: true, default: Date.now()})
  public timestamp: string
}

/**
 * User mongoose schema
 */
export default new NewsModel().getModelForClass(NewsModel, {
  existingMongoose: MongooseDB, schemaOptions: {
    collection: 'news',
    versionKey: false,
    id: true,
  },
})
