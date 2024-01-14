import appService from '../../service/app/index.mjs'
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const menu = async (request, response) => {
  const token = request.headers.authorization?.split(' ')[1]

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      request.userId = decoded.userId;
    } catch (error) {
      console.error("Not authorized");
    }
  }

  const { menuItems, userProfile } = await appService.menu(request.userId)

  response.json({ menuItems, userProfile })
}
