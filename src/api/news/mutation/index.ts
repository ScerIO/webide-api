import AuthController from 'api/auth/controller'
import { AUTH_TOKEN } from 'api/auth/descriptions'
import NewsController from 'api/news/controller'
import { NEWS_ADD_INPUT } from 'api/news/description'
import AddNewsInput from 'api/news/input/add'
import { NewsModel } from 'api/news/model'
import NewsSchema from 'api/news/schema'
import ApiError from 'error'
import {
  Arg,
  Field,
  ObjectType,
} from 'graphql-schema-decorator'

@ObjectType()
export default class NewsMutation {
  /**
   * Auth controller
   */
  private readonly auth = new AuthController()

  /**
   * News controller
   */
  private readonly news = new NewsController()

  /**
   * Add new news
   * *
   * @param token
   * @param input
   */
  @Field({
    type: NewsSchema,
    description: '',
  })
  public async add(
    @Arg({ name: 'token', description: AUTH_TOKEN, nonNull: true }) token: string,
    @Arg({ name: 'input', description: NEWS_ADD_INPUT, nonNull: true }) input: AddNewsInput,
  ): Promise<NewsModel | null> {
    const user = await this.auth.signIn(token)

    if (!user.isAdmin()) throw new ApiError('User not admin', { errorCode: 0x01 })

    return await this.news.add(input)
  }
}
