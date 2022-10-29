const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "yaq", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "yaq", "build", "index.html"));
});

app.listen(PORT);
