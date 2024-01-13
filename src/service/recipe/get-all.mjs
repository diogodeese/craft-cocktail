import { getConnection } from './../../config/database-connection.mjs'

export const getAll = async () => {
  let connection

  try {
    connection = await getConnection()

    const query = `SELECT recipe.*, category.name AS category_name FROM recipe JOIN category ON recipe.category_id = category.id;`
    const [rows] = await connection.execute(query)

    return rows
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
