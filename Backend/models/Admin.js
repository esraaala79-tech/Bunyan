const mongoose = require("mongoose");
const bcrybt = require ("bcrypt");
const { string } = require("joi");

const adminSchema = new mongoose.Schema({
    username:{
        type:string,
        required: [true, "Username is required"]
    },
    email:{
        type:string,
        required: [true, "Email is required"]
    },
    password:{
     type: string,
     require: [true, "Email is required"],
     minlength: 6,
    },
    
},{timestamps:true});

adminSchema.pre("save",async function name(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrybt.hash(this.password, 10);

});

adminSchema.methods.comparePassword = async function (methodPassword) {
    return await bcrybt.compare(methodPassword, this.password);
}

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;