import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const verifyToken = async (request, response, next) => {
  const token = request.headers.authorization?.split(' ')[1]
  console.log(token)
  if (!token) return response.status(401).json({ error: 'Access denied' })

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    request.userId = decoded.userId
    next()
  } catch (error) {
    response.status(401).json({ error: 'Invalid token' })
  }
}
