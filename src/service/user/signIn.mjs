import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { getConnection } from './../../config/database-connection.mjs'
dotenv.config()

export const signIn = async (email, password) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'SELECT * FROM user WHERE email = ?'
    const [rows] = await connection.execute(query, [email])
    if (rows.length > 0) {
      const user = rows[0]

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (passwordMatch) {
        let token = jwt.sign(
          { userId: user.id },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '24h',
          }
        )

        return token
      } else {
        console.log('Invalid credentials')
        return null
      }
    } else {
      console.log('User not found')
      return null
    }
  } catch (error) {
    console.error('Error executing authentication query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
