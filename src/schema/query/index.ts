import NewsQuery from 'api/news/query'
import User from 'api/user/schema'
import {
  Arg,
  Field,
  ObjectType,
} from 'graphql-schema-decorator/lib'
import {
  SCHEMA_NEWS,
  SCHEMA_USER,
} from 'schema/description'
import IUser from 'site-api/user'

@ObjectType()
export default class RootQuery {
  @Field({
    type: User,
    description: SCHEMA_USER,
  })
  public user(@Arg({ name: 'token', nonNull: true }) token: string): Promise<IUser | null> {

    return new Promise(() => ({ token }))
  }
  @Field({
    type: NewsQuery,
    description: SCHEMA_NEWS,
  })
  public news(): number {
    return 0
  }
}
