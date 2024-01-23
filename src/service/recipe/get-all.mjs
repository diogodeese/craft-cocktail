import { getConnection } from './../../config/database-connection.mjs'

export const getAll = async (userId = null) => {
  let connection

  try {
    connection = await getConnection()

    let query
    if (userId) {
      query = `
      SELECT
      recipe.*,
      category.name AS category_name,
      CASE WHEN favorite.recipe_id IS NOT NULL THEN true ELSE false END AS is_favorited
      FROM
        recipe
      JOIN
        category ON recipe.category_id = category.id
      LEFT JOIN
        favorite ON recipe.id = favorite.recipe_id AND favorite.user_id = ?
      ORDER BY recipe.id DESC
      `
    } else {
      query = `
        SELECT recipe.*, category.name AS category_name 
        FROM recipe 
        JOIN category ON recipe.category_id = category.id
        ORDER BY recipe.id DESC
        `
    }
    const [rows] = await connection.execute(query, [userId])

    return rows
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
