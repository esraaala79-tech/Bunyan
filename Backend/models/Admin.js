const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const { string } = require("joi");

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username is required"]
    },
    email:{
        type:String,
        required: [true, "Email is required"]
    },
    password:{
     type: String,
     required: [true, "password is required"],
     minlength: 6,
     select : false,
    },
    
},{timestamps:true});

adminSchema.pre("save",async function () {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);


});

adminSchema.methods.comparePassword = async function (methodPassword) {
    return await bcrypt.compare(methodPassword, this.password);
}

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;