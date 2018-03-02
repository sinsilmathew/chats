const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');

app.use(express.static('./'));
require("./controller/controller.js")(app,io);


http.listen(8080,()=>{
    console.log("Node Server is setup and it is listening on http://"+ip.address()+":8080");
});


