
const jwt = require("jsonwebtoken");


async function authenticateToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Access denied!" });
  }
  try {
    const authorization = req.headers.authorization;
    token = authorization.split(" ");
    token = token[1];
    const decode = await jwt.verify(token, process.env.JWT_SECRET)
    req.user = decode
    next();
  } catch (error) {
    return res.status(401).json({ message: "Access denied!" });
  }
}

module.exports = authenticateToken;