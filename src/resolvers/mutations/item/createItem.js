import { ApolloError } from "apollo-server"
import Items from '../../../models/Items.js'

export default async (_, {input}) => {

  try{

    const { collage, clothes, size } = input

    const isAlreadyExists = await Items.find({ collage, clothes, size, isDeleted: false })

    console.log(isAlreadyExists)
    
    if(isAlreadyExists && !!isAlreadyExists.length) throw new Error('Ya se encuentra un producto creado con esas caracteristicas')

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