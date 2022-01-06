import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'

export default async (_, {input}) => {

  const { idOrder, price } = input

  try{
    const orderFinded = await Order.findOne({ _id: idOrder, isDeleted: false })

    if(!orderFinded) throw new Error('No se ha encontrado la orden')

    const order = await Order.findOneAndUpdate({_id: idOrder}, {
      $set: {
        balance: orderFinded.balance - price,
        previewPayment: orderFinded.previewPayment + price
      },
      $push: {
        previusPayments: { price }
      }
    }, { new: true })

    return order
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};