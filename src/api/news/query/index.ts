import {
  NEWS_ALL,
  NEWS_QUERY,
} from 'api/news/description'
import News, { NewsModel } from 'api/news/model'
import NewsSchema from 'api/news/schema'
import {
  Arg,
  Field,
  ObjectType,
} from 'graphql-schema-decorator'

@ObjectType({
  description: NEWS_QUERY,
})
export default class NewsQuery {
  /**
   * All news with paginate
   * *
   * @param offset
   * @param limit
   */
  @Field({
    type: NewsSchema,
    pagination: true,
    description: NEWS_ALL,
  })
  public async all(
    @Arg({ name: 'offset' }) offset: number,
    @Arg({ name: 'limit' }) limit: number,
  ): Promise<[NewsSchema[], number]> {
    const result = await News.paginate<NewsModel>({}, { offset, limit })

    return [result.docs, result.docs.length]
  }
}
