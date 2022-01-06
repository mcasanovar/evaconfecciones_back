import queries from './queries/index.js'
import mutations from './mutations/index.js'

module.exports = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
}