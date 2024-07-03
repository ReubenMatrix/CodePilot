const {JWT_SECRET} = require("./secret")
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({
            error: "Unauthorized"
        })
    }

    const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token, JWT_SECRET)
        req.userId = payload.userId
        next()
    }catch(err){
        return res.status(401).json({
            error: "Unauthorized"
        })
    }
}

module.exports = authMiddleware