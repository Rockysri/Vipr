
window.onload = (event)=>{
alert("hi");
}
console.log("hi");

var socket = io();


function getinp(){
    var uname= document.getElementById('uname').value;
var pass1= document.getElementById('pass').value;
    console.log(uname + " " + pass1);
    var udetails=[uname,pass1];
    console.log(udetails);
    socket.emit("login",[uname,pass1]);
    document.getElementById("box1").innerHTML='<object type="text/html" data="android_large_2.html" ></object>';
    
}

