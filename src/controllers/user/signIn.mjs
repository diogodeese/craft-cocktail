import userService from '../../service/user/index.mjs'

export const signIn = async (request, response) => {
  switch (request.method) {
    case 'GET':
      response.render('signIn')
      break

    case 'POST':
      const { email, password } = request.body

      const token = await userService.signIn(email, password)

      if (token) {
        response.json(token)
      } else {
        response.json({ message: 'Failed to sign in' })
      }
      break

    default:
      return response.status(405).send('Method not allowed')
  }
}
