import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}

const pool = mysql.createPool(dbConfig)

// Export a function to get a connection from the pool
export const getConnection = () => {
  return pool.promise().getConnection()
}
