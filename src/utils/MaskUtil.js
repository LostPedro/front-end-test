import StringMask from 'string-mask'

export const applyCpfMask = (value) => {
  const max = 12
  const cnpjMask = new StringMask('###.###.###-##')

  if (value) {
    value = value.replace(/\D/g, '')

    if (value && value.length > max) {
      value = value.substr(0, value.length - 1)
    }

    return cnpjMask.apply(value)
  }
  return value
}

export const cardMask = (value) => {
  const max = 16
  const mask = new StringMask('#### #### #### ####')

  if (value) {
    value = value.replace(/\D/g, '')

    if (value && value.length > max) {
      value = value.substr(0, max)
    }

    return mask.apply(value)
  }
  return value
}

export const expireDateMask = (value) => {
  const max = 6
  const mask = new StringMask('##/####')

  if (value) {
    value = value.replace(/\D/g, '')

    if (value && value.length > max) {
      value = value.substr(0, value.length - 1)
    }

    return mask.apply(value)
  }
  return value
}

export const applyPriceMask = (value, prefix = '', suffix = '') => {
  let priceMask = new StringMask('#,##0.00', {reverse: true})

  if (value) {
    if (typeof value === 'number') {
      value = value.toString()
    }
    value = value.replace(/\D/g, '')
    value = parseFloat(value)

    if (value.length > 5) {
      priceMask = new StringMask('##0,00', {reverse: true})
    } else {
      priceMask = new StringMask('#.##0,00', {reverse: true})
    }

    return prefix + (priceMask.apply(value) || 0) + suffix
  }
  return prefix + value + suffix
}

export const removePriceMask = (value) => {
  if (value) {
    if (typeof value === 'number') {
      value = value.toString()
    }

    value = value.replace('.', '')
    value = value.replace(',', '.')

    return value
  }
  return value
}
