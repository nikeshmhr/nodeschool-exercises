"use strict";

const { Writable } = require("stream");

class MyWriteStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(`writing: ${chunk.toString()}`);
        callback();
    }
}

const myWriteStream = new MyWriteStream();
process.stdin.pipe(myWriteStream);