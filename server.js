import express, { json, urlencoded } from "express";
import fs from "fs";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(1499, function () {
  console.log("♂ Server is listening on port 1499");
});

// GET CATALOG MENU DATA
app.get("/api/1", async function (req, res) {
  const serverName = req.query.server;
  const thread = req.query.thread;
  const profileId = req.query.profile;

  console.log(serverName, thread, profileId);

  const date = 123;
  // res.send(JSON.stringify({ date }));
  res.send("погода сегодня");
});
