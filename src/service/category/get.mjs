import { getConnection } from './../../config/database-connection.mjs'

export const get = async (categoryId) => {
  let connection

  try {
    connection = await getConnection()

    const query = `SELECT * FROM category WHERE id = ?`
    const [rows] = await connection.execute(query, [categoryId])

    return rows[0]
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
