// Dotenv
require ("dotenv").config();
//Express
const express = require("express");
const app= express();
//middleware
app.use(express.json());
const morgan = require("morgan")
//simple Logger
if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"));
}
//test Rout
app.get("/test", (req, res)=>{
    res.json({msg:"test route"})
})
//connection BD
const connectedDB = require ("./config/db");
connectedDB();
//routes
const adminRoutes = require ("./routes/auth.route")
app.use("/api/dashboard", adminRoutes)
//Port
const port = process.env.PORT|| 3000 ;

//Run server
app.listen(port, ()=>{
    console.log(`Server Is Running ${port}`)
})