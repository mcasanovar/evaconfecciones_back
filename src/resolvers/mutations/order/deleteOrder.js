import { ApolloError } from "apollo-server"
import Order from '../../../models/Order'

export default async (_, { id }) => {

  try {
    const orderFinded = await Order.findOne({ _id: id })

    if (!orderFinded) throw new Error("No se ha encontrado la orden")

    await Order.findOneAndUpdate(
      { _id: id },
      {
        $set: { isDeleted: true }
      }
    )

    return "Orden eliminada correctamente"
  } catch (e) {
    throw new ApolloError(e)
  }
}