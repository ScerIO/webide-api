import * as express from 'express'
import news from './news'

export default express.Router()
  .use('/news', news)
