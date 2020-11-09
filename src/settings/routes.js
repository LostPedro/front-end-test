// const prodUrl = "";
const devUrl = 'http://localhost:3000/'
const routeApi = ''

export const ROUTES = {
  routeUrl: devUrl,
  routeApi,
  transaction: {
    getTransactionList: {
      url: 'transactions',
      type: 'get'
    },
    getSingleTransaction: {
      url: (id) => `transactions/${id}`,
      type: 'get'
    },
    postTransaction: {
      url: 'transactions',
      type: 'post'
    }
  }
}
