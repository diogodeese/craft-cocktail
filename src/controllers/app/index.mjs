import { home } from './home.mjs'
import { menu } from './menu.mjs'
import { notFound } from './not-found.mjs'
import { backoffice } from './backoffice.mjs'

const appController = {
  home,
  notFound,
  backoffice,
  menu,
}

export default appController
