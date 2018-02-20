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
  query: RootQuery

  @Mutation()
  mutation: RootMutation
}

/**
 * Main schema
 * *
 * @const {GraphQLSchema}
 */
export default schemaFactory(SchemaType)
