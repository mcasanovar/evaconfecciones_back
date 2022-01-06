import { gql } from 'apollo-server'

module.exports = gql`

  type Collage {
    _id: ID!
    isDeleted: Boolean
    name: String!
  }

  input CreateCollageInput {
    name: String!
  }

  # QUERIES

  type Query {
    getAllCollages: [Collage]
  }

  # MUTATIONS

  type Mutation {
    createCollage(input: CreateCollageInput!): Collage!
    deleteCollage(id: ID!): String
  }

`