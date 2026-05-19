// Dotenv
require ("dotenv").config();
//Express
const express = require("express");
const app= express();
//middleware
app.use(express.json());

//simple Logger
if(process.env.NODE_ENV === "dev"){
    app.use((req, res, next)=>{
        console.log(`${req.method} ${req.originalUrl}`)
        next();
    }) 
}
//test Rout
app.get("/test", (req, res)=>{
    res.json({msg:"test route"})
})
//connection BD
const connectedDB = require ("./config/db");
connectedDB();
//Port
const port = process.env.PORT|| 3000 ;

//Run server
app.listen(port, ()=>{
    console.log(`Server Is Running ${port}`)
})