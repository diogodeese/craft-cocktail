import recipeService from '../../service/recipe/index.mjs'

export const get = async (request, response) => {
  const { id } = request.params

  const category = await recipeService.get(id)

  response.json({ category })
}
