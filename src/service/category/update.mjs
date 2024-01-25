import { getConnection } from './../../config/database-connection.mjs'

export const update = async (categoryId, category) => {
  let connection

  try {
    connection = await getConnection()

    const query = 'UPDATE category SET name = ? WHERE id = ?';
    const [result] = await connection.execute(query, [category.name, categoryId]);

    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};