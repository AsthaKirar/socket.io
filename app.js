const express = require("express");
const { Socket } = require("socket.io");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log("client connected")
socket.on("msg",(msg)=>{
  console.log(msg)
  io.emit("msg",msg)
})

  socket.on('disconnect', () => {
    console.log("client disconnected")
  });
});


// Define a route for the home page
app.get("/", function(req, res) {
    res.render("index");
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running port 3000");
});
