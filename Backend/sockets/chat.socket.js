//require jwt
const jwt = require("jsonwebtoken");

//middleware socket.io verify Token 
// socket => user (admin || normal user)
const socketAuthMiddleware = (socket, next)=> {
    try{
        //get token 
        const token = socket.handshake.headr.token;
        if(!token) return next(new Error("Not Found Token"));

        //get payload
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //id & role
        socket.userId = payload.id;
        socket.role = payload.role;
        
        //next
        next();

    }catch(error){
        return next(new Error("Invalid Token"));

    }
};

const chatSocketController = (io) => {
    // use middleware
    io.use(socketAuthMiddleware);
    //create connection
    io.on("connection", (Socket)=>{
        //Logic (Events)
        console.log(
            `user ${socket.userId} & Role ${socket.role} is connection socket Server`,
        );
    });
};

module.exports = chatSocketController;