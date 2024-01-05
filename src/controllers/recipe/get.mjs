import recipeService from '../../service/recipe/index.mjs'

export const get = async (request, response) => {
  const { id } = request.params

  const recipe = await recipeService.get(id)
  console.log(recipe)
  response.render('recipe', recipe)
}
