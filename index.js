const express = require("express");
const server = express();
// above two lines is to use express framework

server.get("/", (req, res) => {
  res.send("Hello World!!");
});

server.listen(5000, () => console.log("server started on 5000"));
