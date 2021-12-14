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
    total: Int!
  }

  type Order {
    _id: ID!
    createAt: String,
    updatedAt: String,
    isDeleted: Boolean,
    code: String!,
    clientFirstName: String!,
    clientLastName: String!,
    phone: String!,
    subTotal: Int!,
    previewPayment: Int!,
    total: Int!,
    balance: Int!,
    previusPayments: [PreviusPayment],
    details: [Detail],
    state: String!
  }

  input PreviusPaymentInput {
    price: Int!
  }

  input DetailsInput {
    collage: String!,
    clothes: String!,
    size: String!,
    uniquePrice: Int!,
    quantity: Int!,
    total: Int!
  }

  input CreateOrderInput {
    clientFirstName: String!,
    clientLastName: String!,
    phone: String!,
    previusPayments: [PreviusPaymentInput],
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
    getOrders: [Order],
    getOrderById(id: ID!): Order
  }

  # MUTATIONS

  type Mutation {
    createOrder(input: CreateOrderInput!): Order
    addPreviewPayment(input: PreviewPaymentInput!): Order
    removePreviewPayment(input: PreviewPaymentInput!): Order
    addItemToOrder(input: addItemInput!): Order
    removeItemToOrder(input: removeItemInput!): Order
  }
`