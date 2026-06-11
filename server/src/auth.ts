import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { AuthRequest, AuthResponse } from '@mamaphon/shared'

const router: Router = Router()

router.post('/auth/login', (req: Request, res: Response) => {
  const { password } = req.body as AuthRequest

  if (password !== process.env.APP_PASSWORD) {
    res.status(401).json({ error: 'Invalid password' })
    return
  }

  const token = jwt.sign(
    { authorized: true },
    process.env.JWT_SECRET as string,
    { expiresIn: '365d' }
  )

  const response: AuthResponse = { token }
  res.json(response)
})

export default router