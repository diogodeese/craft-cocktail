import bcrypt from 'bcrypt'
import { getConnection } from './../../config/database-connection.mjs'
import userService from "./index.mjs"

// Function to check if an email already exists in the database
const isEmailExists = async (email) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'SELECT * FROM user WHERE email = ?'
    const [rows] = await connection.execute(query, [email])

    return rows.length > 0
  } catch (error) {
    console.error('Error checking email existence:', error)
    throw error
  } finally {
    if (connection) {
      connection.release()
    }
  }
}

// Function to hash the password using bcrypt
const hashPassword = async (password) => {
  const saltRounds = 10
  return bcrypt.hash(password, saltRounds)
}

// Function to handle user sign-up
export const signUp = async (email, password) => {
  const emailExists = await isEmailExists(email)

  if (emailExists) {
    console.log('Email already exists')
    return null
  }

  const hashedPassword = await hashPassword(password)

  let connection

  try {
    connection = await getConnection()

    const name = email.split('@')[0]

    const insertQuery = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)'
    const [result] = await connection.execute(insertQuery, [
      name,
      email,
      hashedPassword,
    ])

    const token = await userService.signIn(email, password)

    return token
  } catch (error) {
    console.error('Error signing up user:', error)
    throw error
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
