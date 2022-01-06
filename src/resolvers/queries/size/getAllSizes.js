import { ApolloError } from "apollo-server";
import Size from '../../../models/Size.js'

export default async (_, {}) => {
  try {
    const sizesFinded = await Size.find({ isDeleted: false });
    return sizesFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}