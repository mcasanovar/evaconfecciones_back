import { ApolloError } from "apollo-server"
import Order from '../../../models/Order.js'
import { getTotalPrice } from "../../../../functions/index.js";

export default async (_, {input}) => {

  const { details, previewPayment, isDirectBuy } = input

  try{
    let subTotal = 0
    const timestamp = new Date().getTime();

    const code = `E${timestamp}`

    if(!!details.length){
      subTotal = getTotalPrice(details, "total")
    }

    let balance = subTotal - previewPayment
    let state = 'Pendiente'
    let percentage = 0
    let detailsMapped = details


    if(isDirectBuy){
      balance = subTotal
      state = 'Entregado'
      percentage = 100
      detailsMapped = details.map(item => {
        return {
          ...item,
          completed: true
        }
      })
    }

    const order = new Order({
      ...input,
      previewPayment: isDirectBuy ? 0 : previewPayment,
      details: detailsMapped,
      updatedAt: Date.now(),
      isDeleted: false,
      code,
      subTotal,
      previewPayment,
      balance,
      state,
      percentage
    })
    order.save()
    return order
  }
  catch(e){
    console.log(e)
    throw new ApolloError(e)
  }
  
};