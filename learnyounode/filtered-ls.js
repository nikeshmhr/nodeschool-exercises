"use strict";

const fs = require('fs');

const dirName = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(dirName, (error, data) => {
    if(error) {
        console.error(error);
    }

    data.forEach(file => {
        if(file.endsWith(`.${fileExtension}`)) {
            console.log(file);
        }
    })
})