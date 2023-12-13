import { Router } from 'express'
import userController from './controllers/user/index.mjs'

const router = Router()

// User
router.post('/signIn', userController.signIn)

// Recipe

export { router }
