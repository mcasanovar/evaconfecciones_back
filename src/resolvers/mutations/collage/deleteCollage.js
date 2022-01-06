import { ApolloError } from "apollo-server"
import Collage from '../../../models/Collage.js'

export default async (_, {id}) => {

  try{

    const collageFinded = await Collage.findOne({ _id: id })

    if(!collageFinded) throw new Error('No se ha encontrado el colegio a eliminar')

    await Collage.findOneAndUpdate(
      {_id: id}, 
      {
        $set: { isDeleted: true }
      }
    )
    return 'Colegio eliminado correctamente'

  }
  catch(e){
    throw new ApolloError(e)
  }
  
};