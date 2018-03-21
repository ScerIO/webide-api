import AuthController from 'api/auth/controller'
import ApiError from 'error'
import {
  NextFunction,
  Request,
  Response,
} from 'express'

const authController = new AuthController()

/**
 * Express middleware for check admin privilege
 * *
 * @param req
 * @param res
 * @param next
 */
export async function withAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Auth')
    if (token === null) throw new ApiError('Token exist', { errorCode: 0x01 })

    const user = await authController.signIn(token!!)

    user.isAdmin() ? next() : res.status(403).end()
  } catch (error) {
    res.status(401).end()
  }
}
