import {
  ObjectType,
  Field,
  Arg,
} from 'graphql-schema-decorator/lib'
import User from 'api/user/schema'
import IUser from 'site-api/user'
import NewsQuery from 'api/news/query'
import {
  SCHEMA_USER,
  SCHEMA_NEWS,
} from 'schema/description'

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
