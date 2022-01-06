import { ApolloError } from "apollo-server";
import Items from '../../../models/Items.js'

export default async (_, {}) => {
  try {
    const itemsFinded = await Items.find({ isDeleted: false });
    return itemsFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}