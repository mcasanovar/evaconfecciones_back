import { ApolloError } from "apollo-server";
import Order from '../../../models/Order'

export default async (_, {}) => {
  try {
    const ordersFinded = await Order.find({ isDeleted: false });
    return ordersFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}