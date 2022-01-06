import { ApolloError } from "apollo-server"
import Clothes from '../../../models/Clothes.js'

export default async (_, {id}) => {

  try{

    const clothesFinded = await Clothes.findOne({ _id: id })

    if(!clothesFinded) throw new Error('No se ha encontrado la prenda a eliminar')

    await Clothes.findOneAndUpdate(
      {_id: id}, 
      {
        $set: { isDeleted: true }
      }
    )
    return 'Prenda eliminada correctamente'

  }
  catch(e){
    throw new ApolloError(e)
  }
  
};