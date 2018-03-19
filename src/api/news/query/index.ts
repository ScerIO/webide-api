import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator'
import NewsSchema from 'api/news/schema'
import {
  NEWS_ALL,
} from 'api/news/description'
import News, { NewsModel } from 'api/news/model'

@ObjectType({
  description: 'News',
})
export default class NewsQuery {
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
