import { ApolloError } from "apollo-server"
import Items from '../../../models/Items'

export default async (_, {input}) => {

  try{
    const item = new Items({
      ...input,
      isDeleted: false
    })
    item.save()
    return item
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};