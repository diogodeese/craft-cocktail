import { getConnection } from './../../config/database-connection.mjs'

export const create = async (newRecipe) => {
  let connection


  try {
    connection = await getConnection()

    const hours = Math.floor(newRecipe.time / 60);
    const minutes = newRecipe.time % 60;
    newRecipe.time = `${hours}:${minutes}:00`;

    const query =
      'INSERT INTO recipe (name, author, ingredients, preparation_description, difficulty, category_id, time, cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const [result] = await connection.execute(query, [
      newRecipe.name,
      newRecipe.author,
      newRecipe.ingredients,
      newRecipe.preparation_description,
      newRecipe.difficulty,
      newRecipe.category_id,
      newRecipe.time,
      newRecipe.cost,
    ])

    return result
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
