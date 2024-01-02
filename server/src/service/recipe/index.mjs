import { create } from './create.mjs'
import { getAll } from './get-all.mjs'
import { getByCategory } from './get-by-category.mjs'
import { get } from './get.mjs'

const recipeService = {
  create,
  getAll,
  getByCategory,
  get,
}

export default recipeService
