import {
  InputObjectType,
  Field,
} from 'graphql-schema-decorator'
import {
  NEWS_IMAGE_URL,
  NEWS_TITLE,
  NEWS_DESCRIPTION,
  NEWS_CONTENT,
} from 'api/news/description'

@InputObjectType()
export default class AddNewsInput {
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
}
