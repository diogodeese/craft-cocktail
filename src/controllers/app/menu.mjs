import appService from '../../service/app/index.mjs'

export const menu = async (request, response) => {
  const menuItems = await appService.menu()

  response.json({ menuItems })
}
