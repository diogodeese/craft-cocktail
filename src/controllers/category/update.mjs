import categoryService from '../../service/category/index.mjs'

export const update = async (request, response) => {
  const { categoryId } = request.params
  const { category } = request.body

  if (!category) {
    return response.status(400).json({ error: 'No category provided' })
  }

  let result = await categoryService.update(categoryId, category)

  response.json({ result: result })
}
