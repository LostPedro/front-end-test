import axios from 'axios'

export async function request(url, method, headers, parameters) {
  if (!headers) {
    headers = {
      'Content-Type': 'application/json'
    }
  }

  const config = {
    method,
    url,
    headers,
    data: parameters ? JSON.stringify(parameters) : {}
  }

  if (!parameters || (parameters && Object.keys(parameters).length === 0)) {
    delete config.data
  }
  const instance = axios.create()

  return instance(config)
    .then((response) => {
      return new Promise((resolve, reject) => {
        if (response.status >= 200 && response.status <= 299) {
          if (response.data || response.status === 204) {
            resolve(response.data)
          } else {
            reject(response)
          }
        }
      })
    })
    .catch((error) => {
      const response = {
        message: 'Algo de errado aconteceu',
        error
      }

      return new Promise((resolve, reject) => {
        reject(response)
      })
    })
}
