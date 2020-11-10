export const TransactionListPg = {
  currency: (value) => `R$ ${value}`,
  header: {
    transactionLabel: 'Número de transações',
    totalValueLabel: 'Valor total'
  },
  list: {
    status: {
      paid: 'Paga',
      refused: 'Recusada',
      '': '-'
    }
  }
}
