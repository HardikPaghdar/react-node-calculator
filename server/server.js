"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./src/routes");
var cors = require("cors");
var app = express();
// Call middlewares
app.use(bodyParser.json());
//Set all routes from routes folder
app.use("/", cors(), routes_1.default);
app.listen(3001, function () {
    console.log("Server started on port 3001!");
});
