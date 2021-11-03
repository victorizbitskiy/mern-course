const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.mothod === 'OPTIONS') {
    return rext()
  }

  try {
    0
    const token = req.headers.authorization.splin(' ')[1] // Bearer TOKEN
    if (!token) {
      res.status(401).json({ message: "Нет авторизации" })
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    next()

  } catch (e) {
    res.status(401).json({ message: "Нет авторизации" })
  }

}