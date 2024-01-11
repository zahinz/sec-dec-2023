const express = require("express");
const fs = require("fs");
const path = require("path");

const server = express();

const home = fs.readFileSync(path.join(__dirname, "/pages/home.html"), "utf8");
const user = fs.readFileSync(path.join(__dirname, "/pages/user.html"), "utf8");
const notFound = fs.readFileSync(
  path.join(__dirname, "/pages/404.html"),
  "utf8"
);

// server.use(express.static("public"));

server.get("/", function (req, res) {
  const myHeader = req.headers["x-foo"];

  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", myHeader);
  res.send(home);
  return;
});

server.get("/user", function (req, res) {
  // const params = req.params;
  const query = req.query;
  console.log(query.email);
  res.send(user);
  return;
});

// 404 route - this should always be the last route
server.get("*", function (req, res) {
  res.send(notFound);
  return;
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
