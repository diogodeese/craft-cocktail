import recipeService from '../../service/recipe/index.mjs'

export const create = async (request, response) => {
  const newRecipe = request.body

  if (!newRecipe) {
    return response.status(400).json({ error: 'No recipe provided' })
  }

  newRecipe.author = request.userId
  let result = await recipeService.create(newRecipe)

  response.json({ recipeId: result.insertId })
}
