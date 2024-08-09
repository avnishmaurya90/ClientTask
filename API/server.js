const express = require("express");
const { createServer } = require('node:http');
const validateToken = require("./common/jwt");
var cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();
const app = express();
// const server = createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("*", cors());
app.use(function (req, res, next) {
  //allow cross origin requests
  const allowedOrigins = ["http://localhost:4200"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Accept,Accept-Language,Content-Language,Content-Type,Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(validateToken);
app.use("/api/login", require("./endpoints/login/login.controller"));
app.use("/api/menu", require("./endpoints/menu/menu.controller"));
const server=app.listen(process.env.PORT, () =>
  console.log("Server started " + process.env.PORT)
);
const io = new Server(server, {
    cors: {
      origin: '*',
    }
  });
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    socket.emit('message',"Thanks for contacting me... Hello from nodejs")
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
