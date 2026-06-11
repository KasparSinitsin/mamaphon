import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing token' })
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    jwt.verify(token, process.env.JWT_SECRET as string)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}
