import { getConnection } from './../../config/database-connection.mjs'

export const remove = async (recipeId, userId) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'DELETE FROM favorite WHERE recipe_id = ? AND user_id = ?'
    const [result] = await connection.execute(query, [recipeId, userId])

    return result
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
