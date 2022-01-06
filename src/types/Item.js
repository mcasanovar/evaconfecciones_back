import { gql } from 'apollo-server'

module.exports = gql`

  type Item {
    _id: ID!
    collage: String!,
    clothes: String!,
    size: String!,
    isDeleted: Boolean,
    price: Int!,
    createAt: String
  }

  input CreateItemInput {
    collage: String!,
    clothes: String!,
    size: String!,
    price: Int!,
  }

  # QUERIES

  type Query {
    getAllItems: [Item]
  }

  # MUTATIONS

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    deleteItem(id: ID!): String
  }
`