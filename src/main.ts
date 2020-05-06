const express = require("express");
const server = new express();
const config = require("../config/server.conf");
const router = require("./router/router");
server.use("/", router);
server.listen(config.port, () => {
  console.log(`server is start on ${config.port}`);
});
