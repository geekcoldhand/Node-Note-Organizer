const express = require("express");
const path = require("path");
const api = require("./routes/index");

const app = express();
const PORT = process.env.port || 5502;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/api", api);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// endpoint  - GET request - /api/notes
// ** send them json
// -- look into your db - read a file
// -- convert it if needed
// -- res.json() that data back to the users
app.get("/api/notes", (req, res) => {});
app.post("/api/notes", (req, res) => {});
app.delete("/api/notes", (req, res) => {});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
  console.log(`path: ${path.join(__dirname, "../public/notes")}`);
});
