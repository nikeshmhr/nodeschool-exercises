"use strict";

const fs = require("fs");
const fileContents = fs.readFileSync(process.argv[2]).toString();
const noOfLines = fileContents.split("\n").length;
console.log(noOfLines - 1);