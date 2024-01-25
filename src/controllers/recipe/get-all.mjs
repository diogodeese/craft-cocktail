import recipeService from '../../service/recipe/index.mjs'
import { getToken } from '../../helper/get-token.mjs'

export const getAll = async (request, response) => {
  const token = request.headers.authorization?.split(' ')[1]
  request.userId = getToken(token)

  let recipes
  if (request.userId > 0) {
    recipes = await recipeService.getAll(request.userId)
  } else {
    recipes = await recipeService.getAll()
  }

  response.json({ recipes: recipes })
}
