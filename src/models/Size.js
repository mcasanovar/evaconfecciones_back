import mongoose from 'mongoose'

const SizeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted:{
    type: Boolean
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Size', SizeSchema)