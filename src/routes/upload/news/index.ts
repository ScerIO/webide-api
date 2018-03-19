import * as express from 'express'
import * as multer from 'multer'
import { extname } from 'path'
import { withAdmin } from 'api/auth/middleware/withAdmin'

const storage = multer.diskStorage({
  // tslint:disable-next-line:variable-name
  destination(_req, _res, cb) {
    cb(null, './upload/news/')
  },
  // tslint:disable-next-line:variable-name
  filename(_req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now() + extname(file.originalname)}`)
  },
})

const upload = multer({ storage })

export default express.Router()
  .post('/', withAdmin, upload.fields([
    { name: 'main', maxCount: 1 },
    { name: 'additional', maxCount: 15 },
    ]), (req, res) => {
    // TODO: Return images path schema
    res.send(JSON.stringify(req.files))
    res.end()
  })
  .use('/', express.static('upload/news'))
