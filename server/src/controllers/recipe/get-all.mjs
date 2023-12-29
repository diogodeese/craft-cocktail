import recipeService from '../../service/recipe/index.mjs'

export const getAll = async (request, response) => {
  await recipeService.getAll()
}
