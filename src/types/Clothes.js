import { gql } from 'apollo-server'

module.exports = gql`

  type Clothes {
    _id: ID!
    isDeleted: Boolean
    name: String!
  }

  input CreateClothesInput {
    name: String!
  }

  # QUERIES

  type Query {
    getAllClothes: [Clothes]
  }

  # MUTATIONS

  type Mutation {
    createClothes(input: CreateClothesInput!): Clothes!
    deleteClothes(id: ID!): String
  }
`
