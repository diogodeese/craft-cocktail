import categoryService from '../../service/category/index.mjs'

export const get = async (request, response) => {
  const { categoryId } = request.params

  const category = await categoryService.get(categoryId)

  response.json({ category: category })
}
