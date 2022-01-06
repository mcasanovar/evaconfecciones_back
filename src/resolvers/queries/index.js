//collage
import getAllCollages from './collage/getAllCollages.js'
//clothes
import getAllClothes from './clothes/getAllClothes.js'
//size
import getAllSizes from './size/getAllSizes.js'
//item
import getAllItems from './item/getAllItems.js'
//order
import getOrders from './order/getOrders.js'
import getOrderById from './order/getOrderById.js'
//user
import getUser from './user/getUser.js'

module.exports = {
  getAllCollages,
  getUser,
  getAllClothes,
  getAllSizes,
  getAllItems,
  getOrders,
  getOrderById
}