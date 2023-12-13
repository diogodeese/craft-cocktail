import prisma from '../../config/prismaClient.mjs'

export const signIn = async (email, password) => {
  const user = await prisma.user.findFirst({ where: { email, password } })

  if (!user) {
    return false
  } else {
    return true
  }
}
