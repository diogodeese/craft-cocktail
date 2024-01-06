import recipeService from '../../service/recipe/index.mjs'

export const getAll = async (request, response) => {
  const recipes = await recipeService.getAll()

  response.render('recipes', { recipes })
}
