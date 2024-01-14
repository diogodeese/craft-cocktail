import { getConnection } from './../../config/database-connection.mjs'

export const remove = async (favoriteId) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'DELETE FROM favorite WHERE id = ?'
    const [result] = await connection.execute(query, [favoriteId])

    return result
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
