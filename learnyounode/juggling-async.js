"use strict";
const http = require("http");
const { EventEmitter } = require("events");

const endpoints = [process.argv[2], process.argv[3], process.argv[4]];

let responseCompleteCount = 0;
const dAgg = ["", "", ""];

endpoints.forEach((endpoint, index) => {
    http.get(endpoint, (response) => {
        response.setEncoding("utf-8");
        response.on("data", (data) => {
            dAgg[index] += data;
        });
    
        response.on("end", () => {
            responseCompleteCount++;
            if(responseCompleteCount === 3) {
                dAgg.forEach(d => console.log(d));
            }
        });
    });
});