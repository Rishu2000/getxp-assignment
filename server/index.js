const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log("server has been started in port " + port);
});