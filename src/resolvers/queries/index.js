//collage
import getAllCollages from './collage/getAllCollages'
//clothes
import getAllClothes from './clothes/getAllClothes'
//size
import getAllSizes from './size/getAllSizes'
//item
import getAllItems from './item/getAllItems'
//order
import getOrders from './order/getOrders'
import getOrderById from './order/getOrderById'
//user
import getUser from './user/getUser'

module.exports = {
  getAllCollages,
  getUser,
  getAllClothes,
  getAllSizes,
  getAllItems,
  getOrders,
  getOrderById
}