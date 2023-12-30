import { Router } from 'express'
import recipeController from './controllers/recipe/index.mjs'
import userController from './controllers/user/index.mjs'

const router = Router()

// User
router.post('/signIn', userController.signIn)

// Recipe
router.get('/recipes', recipeController.getAll)
router.get('/recipes/byCategory/:categoryId', recipeController.getByCategory)
router.get('/recipe/:id', recipeController.get)

export { router }
