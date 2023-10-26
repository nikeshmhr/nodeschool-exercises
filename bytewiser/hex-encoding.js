const {Buffer} = require("node:buffer");

const buf = Buffer.from([...process.argv].splice(2));
console.log(buf.toString("hex"));
