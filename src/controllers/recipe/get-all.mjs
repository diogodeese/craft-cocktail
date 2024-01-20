import recipeService from '../../service/recipe/index.mjs'

export const getAll = async (request, response) => {
  const token = request.headers.authorization?.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    request.userId = decoded.userId
  } catch (error) {
    console.error("Unauthenticated")
  }

  const recipes = await recipeService.getAll(request.userId)

  response.render('recipes', { recipes })
}
