const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const port = 3001;

const app = express();
const httpServer = http.createServer(app);
const io = socketio(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  console.log("New WS connection.");
  socket.on("text", (text) => {
    socket.broadcast.emit("text", text);
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on: ${port}`);
});
