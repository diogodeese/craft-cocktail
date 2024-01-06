import { getConnection } from '../../config/database-connection.mjs'

export const menu = async () => {
  let connection

  try {
    connection = await getConnection()

    const query = 'SELECT * FROM menu ORDER BY `order` ASC'
    const [rows] = await connection.execute(query)

    console.log(rows)
    return rows
  } catch (error) {
    console.error('Error fetching menu items:', error)
    throw error // Rethrow the error for handling in the calling code
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
