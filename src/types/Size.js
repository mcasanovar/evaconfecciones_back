import { gql } from 'apollo-server'

module.exports = gql`

  type Size {
    _id: ID!
    isDeleted: Boolean
    name: String!
  }

  input CreateSizeInput {
    name: String!
  }

  # QUERIES

  type Query {
    getAllSizes: [Size]
  }

  # MUTATIONS

  type Mutation {
    createSize(input: CreateSizeInput!): Size!
    deleteSize(id: ID!): String
  }
`
