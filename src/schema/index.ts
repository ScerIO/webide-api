import {
  Mutation,
  Query,
  Schema,
  schemaFactory,
} from 'graphql-schema-decorator/lib'

import RootMutation from './mutation'
import RootQuery from './query'

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
