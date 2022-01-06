import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'

export default async (_, {input}) => {

  const { idOrder, idItem } = input

  try{
    const orderFinded = await Order.findOne({ _id: idOrder, isDeleted: false })

    if(!orderFinded) throw new Error('No se ha encontrado la orden')

    let oldItem = {}
    let newItems = []

    orderFinded.details.forEach(item => {
      if(item._id.toString() === idItem){
        oldItem = item
      }
      else{
        newItems.push(item)
      }
    });

    const newSubTotal = orderFinded.subTotal - oldItem.total

    const order = await Order.findOneAndUpdate({_id: idOrder}, {
      $set: {
        subTotal: newSubTotal,
        total: newSubTotal,
        balance: newSubTotal - orderFinded.previewPayment,
        details: newItems
      },
    }, { new: true })

    return order
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};