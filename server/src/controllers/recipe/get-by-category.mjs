import recipeService from '../../service/recipe/index.mjs'

export const getByCategory = async (request, response) => {
  const { categoryId } = request.params

  const categories = await recipeService.getByCategory(categoryId)

  response.json({ categories })
}
