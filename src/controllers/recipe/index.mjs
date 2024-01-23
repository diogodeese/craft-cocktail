import { create } from './create.mjs'
import { getAll } from './get-all.mjs'
import { getByCategory } from './get-by-category.mjs'
import { get } from './get.mjs'
import { page } from './page.mjs'

const recipeController = {
  page,
  create,
  getAll,
  getByCategory,
  get,
}

export default recipeController
