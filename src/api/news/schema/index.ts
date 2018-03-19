import {
  ObjectType,
  Field,
} from 'graphql-schema-decorator'
import INews from 'api/news/interface'
import Schema from 'api/base/schema'
import {
  NEWS_IMAGE_URL,
  NEWS_TITLE,
  NEWS_DESCRIPTION,
  NEWS_CONTENT,
  NEWS_TIMESTAMP,
} from 'api/news/description'

@ObjectType({
  description: 'qqq',
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
