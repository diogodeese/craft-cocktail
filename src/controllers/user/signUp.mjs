import userService from '../../service/user/index.mjs'

export const signUp = async (request, response) => {
  switch (request.method) {
    case 'GET':
      response.render('signUp')
      break

    case 'POST':
      const { email, password } = request.body

      const token = await userService.signUp(email, password)

      if (token) {
        response.json(token)
      } else {
        response.json({ message: 'Failed to sign up' })
      }
      break

    default:
      response.status(405).send('Method Not Allowed')
  }
}
