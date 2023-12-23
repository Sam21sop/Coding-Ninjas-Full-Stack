// Please don't change the pre-written code.

const express = require("express");
const app = express();

const globalMiddleware = (req, res, next) => {
  if (req.method === 'GET' && req.path === '/')
  {
    console.log(`${req.method}`);
    console.log(`${req.path}`);
  }
  next();
};

const logRequest = () => {
  app.use(globalMiddleware)
};

logRequest();

app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
