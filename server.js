const express = require("express")
const PORT = process.env.PORT|| 4000
const app = express()
const server = app.listen(PORT,()=>{
    console.log("Hello ")
})
const io = require("socket.io")(server);

app.use(express.static(__dirname+"/public"));
console.log(__dirname+"/public")

io.on("connection",(socket)=>{
    console.log(socket.id+" connected");
    socket.on("disconnect",()=> {
        console.log(socket.id+" disconnected...")
    });
});

io.emit("mesg");


