const express = require("express")
const PORT = process.env.PORT|| 4000
const app = express()
const server = app.listen(PORT,()=>{
    console.log("Hello ")
})
const io = require("socket.io")(server);

app.use(express.static(__dirname+"/docs"));

var users =[];
io.on("connection",(socket)=>{
    console.log(socket.id+" connected");
    socket.on("disconnect",()=> {
        console.log(socket.id+" disconnected...");
        
    });
    socket.on("login",(udetails)=>{
        users.push(udetails);
        console.log(users);
    });
    
});




