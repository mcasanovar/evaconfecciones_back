import mongoose from 'mongoose'

const ItemsSchema = mongoose.Schema({
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
  isDeleted: {
    type: Boolean
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Items", ItemsSchema)