import Schema from 'api/base/schema'
import {
  NEWS_CONTENT,
  NEWS_DESCRIPTION,
  NEWS_IMAGE_URL,
  NEWS_SCHEMA,
  NEWS_TIMESTAMP,
  NEWS_TITLE,
} from 'api/news/description'
import {
  Field,
  ObjectType,
} from 'graphql-schema-decorator'
import INews from 'api/news/interface'

@ObjectType({
  description: NEWS_SCHEMA,
})
export default class NewsSchema extends Schema implements INews {
  @Field({
    nonNull: true,
    description: NEWS_IMAGE_URL,
  })
  public image: string

  @Field({
    nonNull: true,
    description: NEWS_TITLE,
  })
  public title: string

  @Field({
    nonNull: true,
    description: NEWS_DESCRIPTION,
  })
  public description: string

  @Field({
    nonNull: true,
    description: NEWS_CONTENT,
  })
  public content: string

  @Field({
    nonNull: true,
    description: NEWS_TIMESTAMP,
  })
  public timestamp: string
}
