import { ApolloError } from "apollo-server"
import Items from '../../../models/Items.js'

export default async (_, {id}) => {

  try{

    const itemFinded = await Items.findOne({ _id: id })

    if(!itemFinded) throw new Error('No se ha encontrado el item a eliminar')

    await Items.findOneAndUpdate(
      {_id: id}, 
      {
        $set: { isDeleted: true }
      }
    )
    return 'Item eliminado correctamente'

  }
  catch(e){
    throw new ApolloError(e)
  }
  
};