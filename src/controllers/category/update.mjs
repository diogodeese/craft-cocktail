import categoryService from '../../service/category/index.mjs'

export const update = async (request, response) => {
  const { category } = request.body

  if (!category) {
    return response.status(400).json({ error: 'No category provided' })
  }

  let result = await categoryService.update(category)

  response.json({ result: result })
}
