"use strict";
const http = require("http");

const endpoint = process.argv[2];

http.get(endpoint, (response) => {
    let dataAggregator = "";
    response.setEncoding("utf-8");
    response.on("error", (err) => {
        console.error("Something went wrong ", err);
    });
    response.on("data", (data) => {
        dataAggregator += data;
    });

    response.on("end", () => {
        console.log(dataAggregator.length);
        console.log(dataAggregator);
    })
});