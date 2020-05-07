"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = express_1.default();
var config = require("./config/server.conf");
var router = require("./router/router");
server.use("/", router);
server.listen(config.port, function () {
    console.log("server is start on " + config.port);
});
