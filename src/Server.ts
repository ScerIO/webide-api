import * as express from 'express'
import * as expressGraphql from 'express-graphql'
// import { CLI } from 'cliffy'
import { CLI } from 'cliffy'
import { Logger } from 'utils'
import schema from 'schema'

{
  const cli = new CLI()
  cli.setDelimiter('-> ')
  cli.command('exit', {
    description: 'Остановить сервер',
    action: () => process.exit(),
  })
  cli.show()
}

express()
  .disable('x-powered-by')
  .use('/api', expressGraphql({ schema }))
  .use('/debug', expressGraphql({
    schema,
    graphiql: true,
  }))
  .listen(process.env.SERVER_PORT, () => Logger.info('Server started'))
