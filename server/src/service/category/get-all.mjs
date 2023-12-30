import { getConnection } from './../../config/database-connection.mjs'

export const getAll = async () => {
  let connection

  try {
    connection = await getConnection()

    const query = `SELECT * FROM category`
    const [rows, fields] = await connection.execute(query)

    console.log(rows)

    return
  } catch (error) {
    console.error('Error executing query:', error)
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
