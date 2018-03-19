import * as express from 'express'
import * as expressGraphql from 'express-graphql'
import { CLI } from 'cliffy'
import { Logger } from 'utils'
import schema from 'schema'
import upload from 'routes/upload'
import * as cors from 'cors'

{
  const cli = new CLI()
  cli.setDelimiter('-> ')
  cli.command('exit', {
    description: 'Close server',
    action: () => process.exit(),
  })
  cli.show()
}

// const { maskErrors } = require('graphql-errors')
// maskErrors(schema)

express()
  .disable('x-powered-by')
  .use('/api', cors(), expressGraphql({ schema }))
  .use('/debug', expressGraphql({
    schema,
    graphiql: true,
  }))
  .use('/upload', upload)
  .listen(process.env.SERVER_PORT, () => Logger.info('Server started'))
