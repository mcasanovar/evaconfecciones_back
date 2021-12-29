import mongoose from 'mongoose'

const previusPaymentSchema = mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now()
  },
  price: {
    type: Number,
    required: true
  }
})

const detailSchema = mongoose.Schema({
  collage: {
    type: String,
    required: true,
    trim: true
  },
  clothes: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  uniquePrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const OrderSchema = mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  isDeleted: {
    type: Boolean
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  subTotal: {
    type: Number,
    required: true
  },
  previewPayment: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  details: [detailSchema],
  comments: {
    type: String,
  },
  state: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Order", OrderSchema)