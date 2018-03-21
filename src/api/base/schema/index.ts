import { BASE_ID } from 'api/base/description'
import { GraphQLID } from 'graphql'
import {
  Field,
} from 'graphql-schema-decorator'

export default class Schema {
  /**
   * Entity unique ID
   */
  @Field({
    type: GraphQLID,
    nonNull: true,
    description: BASE_ID,
  })
  public id?: string
}
