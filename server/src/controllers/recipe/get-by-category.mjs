import recipeService from '../../service/recipe/index.mjs'

export const getByCategory = async (request, response) => {
  const { categoryId } = request.params

  await recipeService.getByCategory(categoryId)
}
