import { Router } from 'express'
import categoryController from './controllers/category/index.mjs'
import recipeController from './controllers/recipe/index.mjs'
import userController from './controllers/user/index.mjs'

const router = Router()

// Category
router.post('/category', categoryController.create)
router.get('/categories', categoryController.getAll)

// Recipe
router.get('/recipes', recipeController.getAll)
router.get('/recipes/byCategory/:categoryId', recipeController.getByCategory)
router.get('/recipe/:id', recipeController.get)
router.post('/recipe', recipeController.create)

// User
router.post('/signIn', userController.signIn)

export { router }
