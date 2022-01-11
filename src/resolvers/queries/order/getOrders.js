import { ApolloError } from "apollo-server";
import Order from '../../../models/Order'

export default async (_, {year}) => {
  try {
    let ordersFinded = []
    const actualYear = year
    const nextYear = `${year + 1}`

    if(!year){
      ordersFinded = await Order.find({ isDeleted: false });
      return ordersFinded;
    }

    ordersFinded = await Order.find({ isDeleted: false, createAt: {
      $gte: `${actualYear}-01-01`,
      $lte: `${nextYear}-01-01`,
    }})
    .sort({ createAt: 1 })

    return ordersFinded

  } catch (error) {
    throw new ApolloError(error)
  }
}