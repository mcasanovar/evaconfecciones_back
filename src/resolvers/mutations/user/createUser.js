import { ApolloError } from "apollo-server";
import bcryptjs from 'bcryptjs'

import User from '../../../models/User'

export default async (_, { input }) => {
  const { email, password } = input;
  try{
    
    const userFinded = await User.findOne({ email })
    
    if(userFinded){
      throw new Error('Este usuario ya está registrado')
    }

    //hash password
    const salt = bcryptjs.genSaltSync(10)

    const inputWithUpdatedAt = {
      ...input,
      password: await bcryptjs.hash(password, salt),
      updatedAt: Date.now()
    };

    const user = new User(inputWithUpdatedAt);

    user.save();

    return user;
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};