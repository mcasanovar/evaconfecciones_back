import jwt from 'jsonwebtoken'

const createToken = (user, secret, expiresIn) => {
  const { _id, firstName, lastName, email } = user
  return jwt.sign({ _id, firstName, lastName, email }, secret, { expiresIn })
}

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret)
}

export default { 
  createToken,
  verifyToken
}