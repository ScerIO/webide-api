import { withAdmin } from 'api/auth/middleware/withAdmin'
import * as express from 'express'
import * as multer from 'multer'
import { extname } from 'path'

export interface INulterFilesSchema {
  [fieldname: string]: Express.Multer.File[]
}

const upload = multer({
  storage: multer.diskStorage({
    // tslint:disable-next-line:variable-name
    destination(req, _res, cb) {
      cb(!('main' in req.files) ? new Error('Main file not exist') : null, './upload/news/')
    },
    // tslint:disable-next-line:variable-name
    filename(_req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now() + extname(file.originalname)}`)
    },
  }),
}).fields([
  { name: 'main', maxCount: 1 },
  { name: 'additional', maxCount: 15 },
])

export default express.Router()
  .post('/', withAdmin, (req: express.Request, res: express.Response) => {
    upload(req, res, (error: Error) => {
      if (error) {
        return res.status(400).send({
          error: error.message,
        }).end()
      }

      const filesSchema = {
        main: (req.files as INulterFilesSchema).main[0].path,
        additional: ((req.files as INulterFilesSchema).additional || [] ).map((file) => file.path),
      }

      res.send(filesSchema).end()
    })

  })
  .use('/', express.static('upload/news'))
