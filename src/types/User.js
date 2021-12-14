import { gql } from 'apollo-server'

module.exports = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    createAt: String
    updatedAt: String
  }

  type Token {
    token: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AuthenticateUserInput {
    email: String!
    password: String!
  }

  # QUERIES
  type Query {
    getUser(token: String!) : User
  }

  # MUTATIONS

  type Mutation {
    createUser(input: CreateUserInput): User
    authenticateUser(input: AuthenticateUserInput): Token
  }

`