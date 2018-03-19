import {
  Schema,
  Query,
  Mutation,
  schemaFactory,
} from 'graphql-schema-decorator/lib'

import RootQuery from './query'
import RootMutation from './mutation'

@Schema()
export class SchemaType {
  @Query()
  public query: RootQuery

  @Mutation()
  public mutation: RootMutation

}

/**
 * Main schema
 * *
 * @const {GraphQLSchema}
 */
export default schemaFactory(SchemaType)
