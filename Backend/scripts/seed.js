// require dotenv
require("dotenv").config();
//require mongoose
const mongoose = require("mongoose")
//admin model
const Admin = require("../models/Admin");
//create new function(server)
const seedSuperAdmin = async ()=> {
    try{
    //DB connected
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is Connected")
    // exist Admin 
    const existAdmin = await Admin.findOne({
        email: process.env.EMAIL_ADMIN,
    });
   if (existAdmin) return console.log("Aleardy Found Admin");

   //create New Admin

   const newAdmin = {
    username: "Super Admin",
    email: process.env.EMAIL_ADMIN,
    password: process.env.PASSWOED_ADMIN,
   };

   const admin = await Admin.create(newAdmin);
   console.log(admin);
    }catch(error){
        console.log(error)
    } finally {
        await mongoose.connection.close();
        console.log("DB Is Closed");
        process.exit(0)

    }
}
//run function
seedSuperAdmin();