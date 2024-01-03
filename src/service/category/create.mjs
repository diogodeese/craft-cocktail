import { getConnection } from './../../config/database-connection.mjs'

export const create = async (newCategory) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'INSERT INTO category (name) VALUES (?)'
    const [result] = await connection.execute(query, [newCategory.name])

    return result
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
