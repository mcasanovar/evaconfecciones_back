//user
import authenticateUser from './user/authenticateUser'
import createUser from './user/createUser'
//collages
import createCollage from './collage/createCollage'
import deleteCollage from './collage/deleteCollage'
//clothes
import createClothes from './clothes/createClothes'
import deleteClothes from './clothes/deleteClothes'
//sizes
import createSize from './size/createSize'
import deleteSize from './size/deleteSize'
//items
import createItem from './item/createItem'
import deleteItem from './item/deleteItem'
import addManyItems from './item/addManyItems'
//orders
import createOrder from './order/createOrder'
import updateOrder from './order/updateOrder'
import deleteOrder from './order/deleteOrder'
import addPreviewPayment from './order/addPreviewPayment'
import removePreviewPayment from './order/removePreviewPayment'
import addItemToOrder from './order/addItemToOrder'
import removeItemToOrder from './order/removeItemToOrder'

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
  deleteOrder,
  addPreviewPayment,
  removePreviewPayment,
  addItemToOrder,
  removeItemToOrder,
  addManyItems
}