"use strict";

const fs = require("fs");
fs.readFile(process.argv[2], {encoding: "utf8"}, (error, data) => {
    console.log(data.split("\n").length - 1);
});