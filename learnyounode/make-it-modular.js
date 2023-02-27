"use strict";

const listFileByExt = require("./mymodule.js");

listFileByExt(process.argv[2], process.argv[3], (error, data) => {
    if(error)
        return console.log(error);

    data.forEach(file => console.log(file));
})