"use strict";

const through = require("through2");
const http = require("http");

const ts = through(write, end);
const server = http.createServer(function(req, res) {
    if(req.method === "POST") {
        req.pipe(ts).pipe(res);
    }
    // res.end();
});

server.listen(process.argv[2], () => {
    console.log(`Listening on ${process.argv[2]}`)
});

function write(data, _, next) {
    this.push(data.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}