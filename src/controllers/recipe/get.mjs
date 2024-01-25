import recipeService from '../../service/recipe/index.mjs'
import { getToken } from '../../helper/get-token.mjs'

export const get = async (request, response) => {
  const { id } = request.params

  const recipe = await recipeService.get(id)

  response.render('recipe', recipe)
}
