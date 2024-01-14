import favoriteService from '../../service/favorite/index.mjs'

export const create = async (request, response) => {
  const { recipeId } = request.body

  if (!recipeId) {
    return response.status(400).json({ error: 'Error trying to favorite a recipe' })
  }

  let result = await favoriteService.create(recipeId, request.userId)

  response.json({ favoriteId: result.insertId })
}
