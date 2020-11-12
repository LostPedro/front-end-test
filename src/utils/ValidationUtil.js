import moment from 'moment'

export const nameSurnameValidate = (value) => {
  const re = /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+)(\s+[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+){1,}$/
  return re.test(String(value))
}

export const cpfValidate = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf === '') return false
  // Elimina CPFs invalidos conhecidos
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false
  // Valida 1o digito
  let add = 0
  for (let i = 0; i < 9; i += 1) add += parseInt(cpf.charAt(i), 10) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cpf.charAt(9), 10)) return false
  // Valida 2o digito
  add = 0
  for (let i = 0; i < 10; i += 1) add += parseInt(cpf.charAt(i), 10) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cpf.charAt(10), 10)) return false
  return true
}

export const creditCardValidate = (value) => {
  const re = /\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}$/

  return re.test(String(value))
}

export const expireDateValidate = (value) => {
  const re = /\d{2}\/\d{4}$/
  const today = moment()
  if (re.test(String(value))) {
    const date = moment(value, 'MM-YYYY')
    if (moment(date).isValid) {
      if (moment(date).isBefore(today, 'month')) {
        return false
      }
      return true
    }
    return false
  }
  return false
}

export const cvvValidate = (value) => {
  const re = /^[0-9]{3}$/
  return re.test(String(value))
}
