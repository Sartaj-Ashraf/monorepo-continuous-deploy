import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to the server");
})
console.log("WebSocket Server started on port 3001");
