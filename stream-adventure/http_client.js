"use strict";

const { request } = require("http");

const options = {method: "POST"};
const reqStream = request("http://localhost:8099", options, (res) => {
    res.pipe(process.stdout);
});

process.stdin.pipe(reqStream);