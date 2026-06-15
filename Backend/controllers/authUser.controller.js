//Admin Model
const User = require("../models/User");

//joi Schema
const loginSchema = require("./validation/authAdminValidation");

//jwt
const jwt = require("jsonwebtoken");

//function
const loginController = async(req,res)=> {
    try{
        //joi validation
        const {erroe, value} = loginSchema.validate(req.body,{
            abortEarly: false,
            stripUnknown:false,
        });

        if(error)
            return res.status(400).json({
        msg: error.details.map((err)=> err.message),
    });

    if(error)
    {
        return res.status(400).json({
            msg: error.details.map((err)=> err.message),
        });
    }

    //Get Data From value
    const {email, password} = value;

    //check Admin found or no
    const user = await User.findOne({email}).select("+password");

    //if user not found
    if(!user)
        return res.status(400).json({msg: "Invalid Email Or Password"});

    const token = await jwt.sign(
        {id: user._id, role:"user"},
        process.env.JWT_SECRET,
        {expiresIn: "1d"},
    );

    res.status(200).json({msg: "Success Login", token});

    }catch(error){
        res.status(500).json({msg: "Internal Server Error"}); 
    }
};

//Export

module.exports = loginController;