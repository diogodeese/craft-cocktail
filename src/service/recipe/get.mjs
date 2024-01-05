import { getConnection } from './../../config/database-connection.mjs'

export const get = async (id) => {
  let connection

  try {
    connection = await getConnection()

    const query = `SELECT * FROM recipe WHERE id = ${id}`
    const [rows, fields] = await connection.execute(query)

    return rows.length > 0 ? rows[0] : null
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
