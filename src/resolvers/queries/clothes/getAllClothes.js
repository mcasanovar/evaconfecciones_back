import { ApolloError } from "apollo-server";
import Clothes from '../../../models/Clothes'

export default async (_, {}) => {
  try {
    const clothesFinded = await Clothes.find({ isDeleted: false });
    return clothesFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}