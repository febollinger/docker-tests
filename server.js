const express = require("express");

const port = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("hello word !!");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
