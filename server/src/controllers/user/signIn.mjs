import userService from '../../service/user/index.mjs'

export const signIn = async (request, response) => {
  const { email, password } = request.body

  const signIn = await userService.signIn(email, password)

  if (!signIn) {
    response.send('Failed to sign in')
  } else {
    response.send('Successfully signed in')
  }
}
