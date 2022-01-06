import queries from './queries'
import mutations from './mutations'

module.exports = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
}