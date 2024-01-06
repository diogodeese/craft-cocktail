import userService from '../../service/user/index.mjs'

export const signIn = async (request, response) => {
  switch (request.method) {
    case 'GET':
      response.render('signIn')
      break

    case 'POST':
      const { email, password } = request.body

      const user = await userService.signIn(email, password)

      if (user) {
        response.send('Successfully signed in')
      } else {
        response.send('Failed to sign in')
      }
      break

    default:
      return response.status(405).send('Method not allowed')
  }
}
