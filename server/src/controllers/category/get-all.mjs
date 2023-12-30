import categoryService from '../../service/category/index.mjs'

export const getAll = async (request, response) => {
  await categoryService.getAll()
}
