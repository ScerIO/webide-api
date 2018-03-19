import {
  NextFunction,
  Response,
  Request,
} from 'express'
import AuthController from 'api/auth/controller'

const authController = new AuthController()

export async function withUser(req: Request, res: Response, next: NextFunction) {
  try {
  const token = req.header('Auth')
  if (token === null) throw new Error()

  await authController.signIn(token!!)
  next()
  } catch (error) {
    res.status(401).end()
  }
}
