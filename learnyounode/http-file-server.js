"use strict";

const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
    fs.createReadStream(fileLocation).pipe(res);
});

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})