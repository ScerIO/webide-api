import { CLI } from 'cliffy'
import * as cors from 'cors'
import * as express from 'express'
import * as expressGraphql from 'express-graphql'
import upload from 'routes/upload'
import schema from 'schema'
import Logger from 'utils/logger'

{
  const cli = new CLI()
  cli.setDelimiter('-> ')
  cli.command('exit', {
    description: 'Close server',
    action: () => process.exit(),
  })
  cli.show()
}

express()
  .disable('x-powered-by')
  .use('/graphql', cors(), expressGraphql({ schema }))
  .use('/graphiql', expressGraphql({
    schema,
    graphiql: true,
  }))
  .use('/upload', upload)
  .listen(process.env.SERVER_PORT, () => Logger.info('Server started'))
