import categoryService from '../../service/category/index.mjs'

export const getAll = async (request, response) => {
  const categories = await categoryService.getAll()

  response.json({ categories })
}
