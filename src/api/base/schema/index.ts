import {
  Field,
} from 'graphql-schema-decorator'
import { GraphQLID } from 'graphql'
import { BASE_ID } from 'api/base/description/inedx'

export default class Schema {
  /**
   * Entity unique ID
   * *
   * @type {string}
   */
  @Field({
    type: GraphQLID,
    nonNull: true,
    description: BASE_ID,
  })
  public id?: string
}
