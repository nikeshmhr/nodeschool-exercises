"use strict";

const http = require("http");

const endpoint = process.argv[2];
http.get(endpoint, (response) => {
    response.setEncoding("utf-8");
    response.on("error", (err) => {
        console.error("Something went wrong ", err);
    });
    response.on("data", (data) => {
        console.log(data);
    });
});