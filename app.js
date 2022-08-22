require("dotenv").config();
const express = require("express");
const app = express();

app
  .get("/send", (req, res) => {
    const to = req.query.to;
    const message = req.query.message;

    send(to, message);
    res.send("ok");
  })
  .listen(3000, () => console.log("Example app listening on port 3000!"));

const send = (to, message) => {
  const tmi = require("tmi.js");

  const client = new tmi.Client({
    options: { debug: true },
    identity: {
      username: process.env.username,
      password: process.env.password,
    },
    channels: [to],
  });

  client.connect();

  // when connect success, then send message
  client.on("connected", (address, port) => {
    client.say(to, message);
    client.disconnect();
  });
};

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id={client_id}&redirect_uri=http://localhost:3000&scope=chat%3Aread+chat%3Aedit
