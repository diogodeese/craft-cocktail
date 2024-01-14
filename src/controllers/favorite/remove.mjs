import favoriteService from '../../service/favorite/index.mjs'

export const remove = async (request, response) => {
  const { favoriteId } = request.params

  if (!favoriteId) {
    return response.status(400).json({ error: 'Error trying to unfavorite a recipe' })
  }

  let result = await favoriteService.remove(favoriteId)

  response.json({ result: result })
}
