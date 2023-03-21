const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", (req, res) => {
    const reverseStr = req.body.str.split("").reverse().join("");
    res.send(reverseStr);
});

app.listen(process.argv[2]);