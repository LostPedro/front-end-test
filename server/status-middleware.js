const generateRandomStatus = () => {
  if (Math.random() > 0.5) {
    return 'refused'
  }
  return 'paid'
}

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.body.status = generateRandomStatus()
  }

  next()
}
