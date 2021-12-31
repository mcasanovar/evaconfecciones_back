import { ApolloError } from "apollo-server"
import Order from '../../../models/Order'

export default async (_, {input}) => {

  const { details, previewPayment } = input

  try{
    const timestamp = new Date().getTime();

    const code = `E${timestamp}`

    //obtener el subtotal de la orden
    let subTotal = 0

    if(!!details.length){
      subTotal = details.reduce((acc, current) => acc + current.total, 0)
    }

    console.log(details)

    const order = new Order({
      ...input,
      updatedAt: Date.now(),
      isDeleted: false,
      code,
      subTotal,
      previewPayment,
      balance: subTotal - previewPayment,
      state: 'Pendiente',
      percentage: 0
    })
    order.save()
    return order
  }
  catch(e){
    console.log(e)
    throw new ApolloError(e)
  }
  
};