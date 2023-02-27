"use strict";
const fs = require('fs');
const path = require("path");

function main(dirName, extension, callback) {
    fs.readdir(dirName, (error, data) => {
        if(error) {
            callback(error);
        } else {
            const filteredData = data.filter(file => path.extname(file) === `.${extension}`);
            callback(null, filteredData);
        }
    })
}

module.exports = main;