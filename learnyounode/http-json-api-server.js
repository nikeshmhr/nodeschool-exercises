"use strict";

const http = require("http");

const port = process.argv[2];
const routes = ["/api/parsetime", "/api/unixtime"];
const server = http.createServer((req, res) => {
    const url = new URL(req.url, "https://example.com");
    const path = url.pathname;
    if(req.method !== "GET" || !routes.includes(path)) {
        return res.end(`Send me a GET request at any of these parths ${routes}\n`);
    }
    const isoDate = url.searchParams.get("iso");
    const date = new Date(isoDate);

    res.writeHead(200, {"Content-Type": "application/json"});

    if(path === routes[0]) {
        const timeInJSON = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        res.end(JSON.stringify(timeInJSON));
    } else {
        res.end(JSON.stringify({unixtime: date.getTime()}));
    }
      
});

server.listen(port);