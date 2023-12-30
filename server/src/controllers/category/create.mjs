import categoryService from '../../service/category/index.mjs'

export const create = async (request, response) => {
  const newCategory = request.body

  if (!newCategory) {
    return response.status(400).json({ error: 'No category provided' })
  }

  let result = await categoryService.create(newCategory)

  response.json({ categoryId: result.insertId })
}
