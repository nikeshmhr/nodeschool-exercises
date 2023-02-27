"use strict";

const { Readable } = require("stream");

class MyStream extends Readable {
    _read() {}
}

const myStream = new MyStream();
myStream.push(process.argv[2]);

myStream.pipe(process.stdout);