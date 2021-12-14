import mongoose from 'mongoose'

const CollageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted: {
    type: Boolean,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Collage', CollageSchema)