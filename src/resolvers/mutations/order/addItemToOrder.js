import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'

export default async (_, {input}) => {

  const { idOrder, collage, clothes, size, uniquePrice, quantity } = input

  try{
    const orderFinded = await Order.findOne({ _id: idOrder, isDeleted: false })

    if(!orderFinded) throw new Error('No se ha encontrado la orden')

    const totalNewItem = {
      collage,
      clothes,
      size,
      uniquePrice,
      quantity,
      total: uniquePrice * quantity
    }

    const newSubTotal = orderFinded.subTotal + totalNewItem.total

    const order = await Order.findOneAndUpdate({_id: idOrder}, {
      $set: {
        subTotal: newSubTotal,
        total: newSubTotal,
        balance: newSubTotal - orderFinded.previewPayment
      },
      $push: {
        details: totalNewItem
      }
    }, { new: true })

    return order
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};