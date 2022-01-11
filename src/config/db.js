import mongoose from 'mongoose'

require('dotenv').config({ path: ".env" })

const connectDb = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URL, {})
    await mongoose.connect(process.env.MONGO_URL_TEST || process.env.MONGO_URL, {})
    console.log("DB conected")
  } catch (error) {
    console.log("Se ha generado un error al conectar con la DB")
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDb