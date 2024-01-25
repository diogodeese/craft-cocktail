import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const getToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return decoded.userId
  } catch (error) {
    console.error('Unauthenticated: ' + error)
    return 0
  }
}