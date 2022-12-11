import jwt from "jsonwebtoken";

const createToken = (user, secret, expiresIn) => {
  const { _id, firstName, lastName, email } = user;
  return jwt.sign({ _id, firstName, lastName, email }, secret, { expiresIn });
};

const verifyToken = async (token, secret) => {
  return await jwt.verify(token, secret);
};

export default {
  createToken,
  verifyToken,
};
