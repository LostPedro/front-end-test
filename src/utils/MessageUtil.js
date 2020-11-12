import {notification} from 'antd'
import t from 'typy'
import 'antd/dist/antd.css'
import {SETTINGS} from '../settings'

export const errorTreatment = (e) => {
  if (t(e, 'error.response.status').safeNumber) {
    return t(e, 'error.response.status').safeNumber
  }
  const error = t(e, 'error.message').safeString.replace(/\s/g, '')

  return error.charAt(0).toLowerCase() + error.slice(1)
}

export const openErrorNotification = (e) => {
  const error = errorTreatment(e)
  const errorObj = SETTINGS.messages.error[error]

  if (t(errorObj).safeObject) {
    return notification.error({
      message: t(errorObj, 'title').safeString,
      description: t(errorObj, 'description').safeString
    })
  }
  return notification.error({
    message: SETTINGS.messages.error.default.title,
    description: SETTINGS.messages.error.default.description
  })
}
