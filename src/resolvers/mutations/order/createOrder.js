import { ApolloError } from "apollo-server"
import Order from '../../../models/Order'

export default async (_, {input}) => {

  const { details, previusPayments } = input

  try{
    const timestamp = new Date().getTime();

    const code = `E${timestamp}`

    //obtener el subtotal de la orden
    let subTotal = 0
    let previewPayment = 0

    if(!!details.length){
      subTotal = details.reduce((acc, current) => acc + current.total, 0)
    }

    if(!!previusPayments.length){
      previewPayment = previusPayments.reduce((acc, current) => acc + current.price, 0)
    }

    const order = new Order({
      ...input,
      updatedAt: Date.now(),
      isDeleted: false,
      code,
      subTotal,
      previewPayment,
      total: subTotal,
      balance: subTotal - previewPayment,
      state: 'Pendiente'
    })
    order.save()
    return order
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};