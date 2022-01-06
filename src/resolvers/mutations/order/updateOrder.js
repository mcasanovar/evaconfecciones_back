import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'
import { getTotalPrice } from "../../../functions";

export default async (_, { input }) => {
  try {
    const { id, clientName, phone, comments, details, previewPayment, percentage } = input

    const oldOrder = await Order.findById(id)

    if(!oldOrder) throw new Error('No se ha encontrado la orden')

    let subTotal = 0
    let state = 'Pendiente'

    if(!!details.length){
      subTotal = getTotalPrice(details, "total")
    }

    if(details.every(item => item.completed)){
      state = 'Listo para entrega'
    }

    const newOrder = {
      updatedAt: Date.now(),
      clientName,
      phone,
      comments,
      subTotal,
      previewPayment,
      balance: subTotal - previewPayment,
      details,
      state,
      percentage
    }

    const order = await Order.findByIdAndUpdate({ _id: id }, newOrder, { new: true })
    return order

  } catch (error) {
    console.log(e)
    throw new ApolloError(e)
  }
}