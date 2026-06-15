//Admin module
const Admin = require("../models/Admin")
//joi Schema
const loginSchema = require("./validation/authAdminValidation")
//jwt
const jwt = require("jsonwebtoken");
//function
const loginController = async(req, res)=>{
    try{
        //joi validation
        const {error, value} = loginSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
       if(error) return res.status(400).json({
        msg: error.details.map((err)=> err.message),
       });
       //Get Data From value
       const {email, password} = value;
       //check Admin Found or not
       const admin = await Admin.findOne({email}).select("+password"); //admin =>schema  Admin=> model
       // if user not found 
       if (!admin) return res.status(400).json({msg: "Invalid Email Or Password"})
        //compare password
       const  matchedPassword = await admin.comparePassword(password);
       //if pass false
       if(!matchedPassword)
        return res.status(400).json({msg: "Invalid Email Or Password"});
    

       const token = await jwt.sign(
        {id: admin._id, role:"admin"},
         process.env.JWT_SECRET, 
         {expiresIn: "1d"});
       res.status(200).json({msg:"Login Succesfully", token});

    }catch (error) {

        return res.status(500).json({
            msg: error.message
        });
    
}
}
//export
module.exports = loginController;