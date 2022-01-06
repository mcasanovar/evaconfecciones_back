import { ApolloError } from "apollo-server"
import Size from '../../../models/Size.js'

export default async (_, {id}) => {

  try{

    const sizeFinded = await Size.findOne({ _id: id })

    if(!sizeFinded) throw new Error('No se ha encontrado la talla a eliminar')

    await Size.findOneAndUpdate(
      {_id: id}, 
      {
        $set: { isDeleted: true }
      }
    )
    return 'Talla eliminada correctamente'

  }
  catch(e){
    throw new ApolloError(e)
  }
  
};