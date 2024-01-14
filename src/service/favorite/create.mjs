import { getConnection } from './../../config/database-connection.mjs'

export const create = async (recipeId, userId) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'INSERT INTO favorite (recipe_id, user_id) VALUES (?, ?)'
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
