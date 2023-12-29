import mysql from 'mysql2'

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '<password>',
  database: 'craftcocktail',
}

const pool = mysql.createPool(dbConfig)

// Export a function to get a connection from the pool
export const getConnection = () => {
  return pool.promise().getConnection()
}
