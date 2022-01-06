//user
import authenticateUser from './user/authenticateUser.js'
import createUser from './user/createUser.js'
//collages
import createCollage from './collage/createCollage.js'
import deleteCollage from './collage/deleteCollage.js'
//clothes
import createClothes from './clothes/createClothes.js'
import deleteClothes from './clothes/deleteClothes.js'
//sizes
import createSize from './size/createSize.js'
import deleteSize from './size/deleteSize.js'
//items
import createItem from './item/createItem.js'
import deleteItem from './item/deleteItem.js'
//orders
import createOrder from './order/createOrder.js'
import updateOrder from './order/updateOrder.js'
import addPreviewPayment from './order/addPreviewPayment.js'
import removePreviewPayment from './order/removePreviewPayment.js'
import addItemToOrder from './order/addItemToOrder.js'
import removeItemToOrder from './order/removeItemToOrder.js'

module.exports = {
  createCollage,
  createUser,
  authenticateUser,
  deleteCollage,
  createClothes,
  deleteClothes,
  createSize,
  deleteSize,
  createItem,
  deleteItem,
  createOrder,
  updateOrder,
  addPreviewPayment,
  removePreviewPayment,
  addItemToOrder,
  removeItemToOrder
}