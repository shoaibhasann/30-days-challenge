import { config } from "dotenv";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// load env variables
config();

const port = process.env.PORT || 9000;

// constructing _dirname
const _dirname = dirname(fileURLToPath(import.meta.url));

// basic express app
const app = express();


// create a http server with express to handle http request-reponse
const server = createServer(app);

// binding websocket using socket.io into http server and setting cors
const io = new Server(server, {
  cors: {
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST"]
  }
});

// path to client directory
const clientPath = join(_dirname, "..", "client");

// adding a middleware to serve static files from the "client" directory
app.use(express.static(clientPath));

// serving home page route
app.get("/", (req, res) => {
  res.sendFile(join(clientPath, "index.html"));
});

// users in the chat room
const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (username) => {
    if (username) {
      users[socket.id] = username;
      socket.broadcast.emit("user-joined", username);
    }
  });

  socket.on("send", (message) => {
    if (message) {
      socket.broadcast.emit("receive", {
        message: message,
        username: users[socket.id],
      });
    }
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    if (username) {
      socket.broadcast.emit("left-chat", username);
      delete users[socket.id];
    }
  });
});

server.listen(port, () => {
  console.log("server running at http://localhost:3000");
});
