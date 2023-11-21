require("dotenv").config()
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (!header){
      return res.status(400).json({
        message: "Invalid Headers"
      })
    }
  
    const token = header.split(" ")[1]
    if (!token){
      return res.status(400).json({
        message: "There's no Token"
      })
    }
  
    const user = jwt.verify(token, process.env.JWT_KEY)
    req.user = user
    
    next()
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}

module.exports = verifyToken