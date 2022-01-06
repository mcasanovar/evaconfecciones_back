import { ApolloError } from "apollo-server";
import Order from '../../../models/Order.js'

export default async (_, {id}) => {
  try {
    const orderFinded = await Order.findOne({ _id: id, isDeleted: false })

    if(!orderFinded) throw new Error('No se ha encontrado la orden consultada')

    return orderFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}