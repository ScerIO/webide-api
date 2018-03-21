import {
  NEWS_CONTENT,
  NEWS_DESCRIPTION,
  NEWS_IMAGE_URL,
  NEWS_SHARE_VK,
  NEWS_TITLE,
} from 'api/news/description'
import {
  Field,
  InputObjectType,
} from 'graphql-schema-decorator'

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

  @Field({
    description: NEWS_SHARE_VK,
  })
  public shareVK: boolean
}
