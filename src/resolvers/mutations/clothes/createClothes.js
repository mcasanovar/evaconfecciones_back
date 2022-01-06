import { ApolloError } from "apollo-server"
import Clothes from '../../../models/Clothes.js'

export default async (_, {input}) => {

  try{
    const clothes = new Clothes({
      ...input,
      isDeleted: false
    })
    clothes.save()
    return clothes
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};