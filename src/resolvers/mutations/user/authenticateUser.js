import { ApolloError } from "apollo-server";
import bcryptjs from 'bcryptjs'
import { JsonWebToken } from '../../../libs'

import User from '../../../models/User'

require('dotenv').config({ path: ".env" })

export default async (_, {input}) => {

  const { createToken } = JsonWebToken;

  try{

    const { email, password } = input

    const userFinded = await User.findOne({ email })

    if(!userFinded) throw new Error('No se ha encontrado el usuario')

    const isRightPassword = await bcryptjs.compare(password, userFinded.password)

    if(!isRightPassword) throw new Error('La contraseña es incorrecta')

    return {
      token: createToken(userFinded, process.env.SECRET_JWT, '48h')
    }
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};