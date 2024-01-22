import favoriteService from '../../service/favorite/index.mjs'
import jwt from 'jsonwebtoken'

export const remove = async (request, response) => {
  const token = request.headers.authorization?.split(' ')[1]
  const { recipeId } = request.body

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    request.userId = decoded.userId
  } catch (error) {
    console.error('Unauthenticated: ' + error)
  }

  if (!recipeId) {
    return response
      .status(400)
      .json({ error: 'Error trying to unfavorite a recipe' })
  }

  let result = await favoriteService.remove(recipeId, request.userId)

  response.json({ result: result })
}
