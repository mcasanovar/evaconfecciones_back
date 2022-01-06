import { ApolloError } from "apollo-server"
import Size from '../../../models/Size.js'

export default async (_, {input}) => {

  try{
    const size = new Size({
      ...input,
      isDeleted: false
    })
    size.save()
    return size
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};