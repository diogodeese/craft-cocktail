import { getConnection } from '../../config/database-connection.mjs'

export const menu = async (userId = null) => {
  let connection

  try {
    connection = await getConnection()

    const menuQuery = 'SELECT * FROM menu ORDER BY `order` ASC'
    const [menuRows] = await connection.execute(menuQuery)
    const menuItems = menuRows ?? null

    let userProfile
    if (userId) {
      const userQuery = 'SELECT email, isAdmin FROM user WHERE `id` = ' + userId
      const [userRows] = await connection.execute(userQuery)
      userProfile = userRows[0]
    } else {
      userProfile = null
    }

    return { menuItems, userProfile }
  } catch (error) {
    console.error('Error fetching menu items:', error)
    throw error
  } finally {
    if (connection) {
      connection.release()
    }
  }
}
