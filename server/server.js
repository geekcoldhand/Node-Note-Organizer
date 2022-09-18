const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 5502;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", (req, res) => {
  console.log("here");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
  console.log(`path: ${path.join(__dirname, "../public/notes")}`);
});
