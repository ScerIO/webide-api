import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator'
import NewsSchema from 'api/news/schema'
import AddNewsInput from 'api/news/input/add'
import AuthController from 'api/auth/controller'
import NewsController from 'api/news/controller'
import { NewsModel } from 'api/news/model'

@ObjectType()
export default class NewsMutation {

  private authController = new AuthController()
  private newsController = new NewsController()

  @Field({
    type: NewsSchema,
    description: '',
  })
  public async add(
    @Arg({ name: 'token', description: 'Access key', nonNull: true }) token: string,
    @Arg({ name: 'input', description: 'News', nonNull: true }) input: AddNewsInput ): Promise<NewsModel | null> {
    const user = await this.authController.signIn(token)
    return user.isAdmin() ? await this.newsController.add({ ...input, timestamp: new Date().toISOString() }) : null
  }
}
