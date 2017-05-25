import express from "express";
import next from "next";
import http from "http";
import socketIO from "socket.io";
import uuid from "uuid";

import resolve from "./resolve";

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

    expressApp.get("*", (req, res) => handle(req, res));

    io.on("connection", socket => {
      console.log("Socket connected");

      socket.on("command", command => {
        command.aggregateId = command.aggregateId || uuid.v4();
        resolve.execute(command).catch(err => console.log(err));
      });
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
