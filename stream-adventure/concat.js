"use strict";

const concat = require("concat-stream");

const cs = concat(write);

function write(data) {
    const dataAggregated = data.toString();
    process.stdout.write(dataAggregated.split("").reverse().join(""));
}

process.stdin.pipe(cs);