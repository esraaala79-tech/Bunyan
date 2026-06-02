// import jwt
const jwt = require ("jsonwebtoken")

//function 

const authMiddleware = async (req, res)=>{
    try{
        if (!authMiddleware){
            return res.status(401).json({msg:"not auth"})
        }
    const token = authHeader.split("")[1]
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    req.admin = decoded 
    

    }catch(error){
    return res.status(400).json({msg:"Invalid token"})

    }
}


//export
module.exports = authMiddleware


