import t from 'typy'
import {request} from './requestServices'
import {ROUTES} from '../settings/routes'

import {removePriceMask} from '../utils'

export function getTransactionList() {
  const routeInfo = ROUTES.transaction.getTransactionList
  const url = ROUTES.routeUrl + routeInfo.url

  return request(url, routeInfo.type)
    .then(async (response) => {
      return new Promise((resolve) => {
        resolve(response)
      })
    })
    .catch((response) => {
      return new Promise((resolve, reject) => {
        reject(response)
      })
    })
}

export function getSingleTransaction(id) {
  const routeInfo = ROUTES.transaction.getSingleTransaction
  const url = ROUTES.routeUrl + routeInfo.url(id)

  return request(url, routeInfo.type)
    .then(async (response) => {
      return new Promise((resolve) => {
        resolve(response)
      })
    })
    .catch((response) => {
      return new Promise((resolve, reject) => {
        reject(response)
      })
    })
}

export function postTransaction(input) {
  const routeInfo = ROUTES.transaction.postTransaction
  const url = ROUTES.routeUrl + routeInfo.url

  const amountString = removePriceMask(t(input, 'transactionAmount').safeString)

  const amount = parseInt(amountString.replace(/\D/g, ''), 10)

  const cpfValue = t(input, 'cpf').safeString.replace(/\D/g, '')
  const cardValue = t(input, 'cardNumber').safeString.replace(/\D/g, '')
  let cardExpDate = t(input, 'expireDate').safeString.replace(/\D/g, '')

  cardExpDate = cardExpDate.substring(0, cardExpDate.length - 2)

  const params = {
    buyer_document: cpfValue,
    credit_card_holder_name: t(input, 'name').safeString,
    credit_card_number: cardValue,
    credit_card_expiration_date: cardExpDate,
    credit_card_cvv: t(input, 'cvv').safeString,
    amount
  }

  return request(url, routeInfo.type, null, params)
    .then(async (response) => {
      return new Promise((resolve) => {
        resolve(response)
      })
    })
    .catch((response) => {
      return new Promise((resolve, reject) => {
        reject(response)
      })
    })
}
