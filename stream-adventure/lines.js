"use strict";
const split2 = require("split2");
const through = require('through2');

const tr = through(write, end);

let lineCount = 1;
function write(buf, encoding, next) {
    const lineString = buf.toString();
    const lineTransformed = lineCount % 2 === 0 ? lineString.toUpperCase() : lineString.toLowerCase();

    this.push(`${lineTransformed}\n`);
    lineCount++;
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(split2()).pipe(tr).pipe(process.stdout);