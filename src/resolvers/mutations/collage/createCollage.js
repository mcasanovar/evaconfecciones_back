import { ApolloError } from "apollo-server"
import Collage from '../../../models/Collage.js'

export default async (_, {input}, {models}) => {

  try{
    const collage = new Collage({
      ...input,
      isDeleted: false
    })
    collage.save()
    return collage
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};