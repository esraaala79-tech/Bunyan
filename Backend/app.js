// Dotenv
require ("dotenv").config();
//Express
const express = require("express");
const app= express();

const http = require("http");
const{Server} = require("socket.io");
//merge server express & native server
const server = http.createServer(app);
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

// basic config
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["Get", "POST"],
    },
});
//Port
const port = process.env.PORT|| 3000 ;

//Run server
server.listen(port, ()=>{
    console.log(`Server Is Running ${port}`)
})