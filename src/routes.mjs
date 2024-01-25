import { Router } from 'express'
import appController from './controllers/app/index.mjs'
import categoryController from './controllers/category/index.mjs'
import favoriteController from './controllers/favorite/index.mjs'
import recipeController from './controllers/recipe/index.mjs'
import userController from './controllers/user/index.mjs'
import { verifyToken } from './middleware/authMiddleware.mjs'

const router = Router()

// App
router.get('/', appController.home)
router.get('/menu', appController.menu)
router.get('/backoffice', appController.backoffice)

// Category
router.post('/category', categoryController.create)
router.put('/category', verifyToken, categoryController.update)
router.get('/categories', categoryController.getAll)
router.get('/category/:categoryId', categoryController.get)

// Favorite
router.post('/favorite', verifyToken, favoriteController.create)
router.delete('/favorite', verifyToken, favoriteController.remove)

// Recipe
router.get('/recipes', recipeController.page)
router.get('/recipesList', recipeController.getAll)
router.get('/recipes/byCategory/:categoryId', recipeController.getByCategory)
router.get('/recipe/:id', recipeController.get)
router.post('/recipe', verifyToken, recipeController.create)

// User
router.get('/signIn', userController.signIn)
router.post('/signIn', userController.signIn)
router.get('/signUp', userController.signUp)
router.post('/signUp', userController.signUp)

export { router }
