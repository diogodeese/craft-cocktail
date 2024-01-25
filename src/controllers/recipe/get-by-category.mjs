import recipeService from '../../service/recipe/index.mjs'

export const getByCategory = async (request, response) => {
  const { categoryId } = request.params

  const recipesByCategory = await recipeService.getByCategory(categoryId)

  response.json({ recipes: recipesByCategory })
}
