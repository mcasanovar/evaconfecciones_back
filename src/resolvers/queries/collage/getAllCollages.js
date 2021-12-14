import { ApolloError } from "apollo-server";
import Collage from '../../../models/Collage'

export default async (_, {}) => {
  try {
    const collagesFinded = await Collage.find({ isDeleted: false });
    console.log(collagesFinded)
    return collagesFinded;
  } catch (error) {
    throw new ApolloError(error)
  }
}