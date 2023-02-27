"use strict";

const net = require("net");
const strftime = require("strftime");

function requestHandler(socket) {
    console.log("RECEIVED CONNECTION...");
    const date = new Date();
    const formattedDate = strftime("%F %H:%M", date);
    socket.write(formattedDate);
    socket.end("\n");
}

const port = process.argv[2];
const server = net.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})