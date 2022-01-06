import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'

export default async (_, {input}) => {

  const { idOrder, idPreviewPayment } = input

  try{
    const orderFinded = await Order.findOne({ _id: idOrder, isDeleted: false })

    if(!orderFinded) throw new Error('No se ha encontrado la orden')

    let oldPreviewPayment = {}
    let newPreviewPayments = []

    orderFinded.previusPayments.forEach(payment => {
      if(payment._id.toString() === idPreviewPayment){
        oldPreviewPayment = payment
      }
      else{
        newPreviewPayments.push(payment)
      }
    });

    const order = await Order.findOneAndUpdate({_id: idOrder}, {
      $set: {
        balance: orderFinded.balance + oldPreviewPayment.price,
        previewPayment: orderFinded.previewPayment - oldPreviewPayment.price,
        previusPayments: newPreviewPayments
      },
    }, { new: true })

    return order
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};