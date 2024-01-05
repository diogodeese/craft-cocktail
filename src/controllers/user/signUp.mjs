import userService from '../../service/user/index.mjs'

export const signUp = async (request, response) => {
  const { email, password } = request.body

  const user = await userService.signUp(email, password)

  if (user) {
    response.send('Successfully signed up')
  } else {
    response.send('Failed to sign up')
  }
}
