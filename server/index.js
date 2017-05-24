const express = require("express");
const next = require("next");
const http = require("http");
const socketIO = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const expressApp = express();
    const server = http.Server(expressApp);
    const io = socketIO(server);

    expressApp.get("/:filter?", (req, res) => {
      const actualPage = "/";
      const queryParams = { filter: req.params.filter };
      app.render(req, res, actualPage, queryParams);
    });

    expressApp.get("*", (req, res) => {
      return handle(req, res);
    });

    io.on("connection", function(socket) {
        console.log('Socket connected');
    });

    server.on("listening", () => {
      console.log(`Example app listening on port 3000!`);
    });

    server.listen(3000);
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
