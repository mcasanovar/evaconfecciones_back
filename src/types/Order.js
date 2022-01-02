import { gql } from 'apollo-server'

module.exports = gql`

  type PreviusPayment {
    createAt: String,
    price: Int
  }

  type Detail {
    collage: String!,
    clothes: String!,
    size: String!,
    uniquePrice: Int!,
    quantity: Int!,
    total: Int!,
    completed: Boolean!
    _id: String!
  }

  type Order {
    _id: ID!
    createAt: String,
    updatedAt: String,
    isDeleted: Boolean,
    code: String!,
    clientName: String!,
    phone: String!,
    subTotal: Int!,
    previewPayment: Int!,
    balance: Int!,
    details: [Detail],
    comments: String,
    state: String!,
    percentage: Int!
  }

  input PreviusPaymentInput {
    price: Int!
  }

  input DetailsInput {
    _id: ID!
    collage: String!,
    clothes: String!,
    size: String!,
    uniquePrice: Int!,
    quantity: Int!,
    total: Int!,
    completed: Boolean!
  }

  input CreateOrderInput {
    clientName: String!,
    phone: String!,
    previewPayment: Int!
    details: [DetailsInput]!,
    comments: String!,
    isDirectBuy: Boolean
  }

  input UpdateOrderInput {
    id: ID!,
    clientName: String!,
    phone: String!,
    comments: String!,
    previewPayment: Int!
    percentage: Int!,
    details: [DetailsInput]!,
  }

  input PreviewPaymentInput {
    idOrder: ID!
    idPreviewPayment: ID
  }

  input addItemInput {
    idOrder: ID!
    collage: String!
    clothes: String!
    size: String!
    uniquePrice: Int!
    quantity: Int!
  }

  input removeItemInput {
    idOrder: ID!
    idItem: ID!
  }

  # QUERIES

  type Query {
    getOrders(year: String): [Order],
    getOrderById(id: ID!): Order
  }

  # MUTATIONS

  type Mutation {
    createOrder(input: CreateOrderInput!): Order
    updateOrder(input: UpdateOrderInput!): Order
    addPreviewPayment(input: PreviewPaymentInput!): Order
    removePreviewPayment(input: PreviewPaymentInput!): Order
    addItemToOrder(input: addItemInput!): Order
    removeItemToOrder(input: removeItemInput!): Order
  }
`