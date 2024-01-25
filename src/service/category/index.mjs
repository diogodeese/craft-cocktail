import { create } from './create.mjs'
import { getAll } from './get-all.mjs'
import { update } from './update.mjs'
import { get } from './get.mjs'

const categoryService = {
  create,
  get,
  update,
  getAll,
}

export default categoryService
