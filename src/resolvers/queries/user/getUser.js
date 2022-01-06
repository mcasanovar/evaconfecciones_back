import { ApolloError } from "apollo-server";
import User from '../../../models/User.js'
import { JsonWebToken } from '../../../libs/index.js'

require('dotenv').config({ path: ".env" })

export default async (_, { token }) => {
  const { verifyToken } = JsonWebToken
  try {
    const userTokenizate = verifyToken(token, process.env.SECRET_JWT)

    console.log("user id", userTokenizate)

    if(!userTokenizate) throw new Error('Ha ocurrido un error con el token al verificar el usuario')

    const userFinded = await User.findOne({ _id: userTokenizate._id })

    if(!userFinded) throw new Error('No se ha encontrado un usuario con el ID obtenido')

    return userFinded

  } catch (error) {
    throw new ApolloError(error)
  }
}