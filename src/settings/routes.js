// const prodUrl = "";
const devUrl = "http://localhost:3000/";
const routeApi = "";

export const ROUTES = {
  routeUrl: devUrl,
  routeApi,
  transaction: {
    getAllTransactions: {
      url: "transactions",
      type: "get",
    },
    getSingleTransaction: {
      url: (id) => `transactions/${id}`,
      type: "get",
    },
    postTransactions: {
      url: "transactions",
      type: "post",
    },
  },
};
