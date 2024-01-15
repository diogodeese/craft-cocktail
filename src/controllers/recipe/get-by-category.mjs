import recipeService from '../../service/recipe/index.mjs'

export const getByCategory = async (request, response) => {
  const { categoryId } = request.params

  const recipeByCategory = await recipeService.getByCategory(categoryId)

  response.render('recipescategory', { recipeByCategory })
}
