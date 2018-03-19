import {
  NextFunction,
  Response,
  Request,
} from 'express'
import AuthController from 'api/auth/controller'

const authController = new AuthController()

export async function withAdmin(req: Request, res: Response, next: NextFunction) {
  try {
  const token = req.header('Auth')
  if (token === null) throw new Error()

  const user = await authController.signIn(token!!)

  user.isAdmin() ? next() : res.status(403).end()
  } catch (error) {
    res.status(401).end()
  }
}
