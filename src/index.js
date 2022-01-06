import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import typeDefs from './types'
import resolvers from './resolvers'
import connectDb from './config/db'
import { JsonWebToken } from './libs'

require('dotenv').config({ path: ".env" })

//libs
const { verifyToken } = JsonWebToken

//db
connectDb()

//server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers['authorization'] || ''
    if(token){
      try {
        const userLogged = verifyToken(token, process.env.SECRET_JWT);
        return {
          userLogged
        }
      } catch (error) {
        console.log("Hubo un error al encontrar el usuario logeado")
        console.log(error)
      }
    }
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server running on ${url}`)
})
