import {request} from './requestServices'
import {ROUTES} from '../settings/routes'

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

export function postTransaction() {
  const routeInfo = ROUTES.transaction.postTransaction
  const url = ROUTES.routeUrl + routeInfo.url
  const params = {}

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
