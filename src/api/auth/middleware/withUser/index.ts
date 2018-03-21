import AuthController from 'api/auth/controller'
import ApiError from 'error'
import {
  NextFunction,
  Request,
  Response,
} from 'express'

const authController = new AuthController()

/**
 * Express middleware for check user privilege
 * *
 * @param req
 * @param res
 * @param next
 */
export async function withUser(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Auth')
    if (token === null) throw new ApiError('Token exist', { errorCode: 0x01 })

    await authController.signIn(token!!)
    next()
  } catch (error) {
    res.status(401).end()
  }
}
