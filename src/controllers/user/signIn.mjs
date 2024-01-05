import userService from '../../service/user/index.mjs'

export const signIn = async (request, response) => {
  const { email, password } = request.body

  const user = await userService.signIn(email, password)

  if (user) {
    response.send('Successfully signed in')
  } else {
    response.send('Failed to sign in')
  }
}
