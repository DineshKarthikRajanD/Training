const express = require("express");
const path = require("path");
var app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  console.log("Welcome to Backend Server");
  res.send("Welcome to the Backend Server");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});

app.get("/static", (req, res) => {
  res.sendFile("D:/Training/backend/public/index.html");
});

app.get("/next", (req, res) => {
  res.sendFile("D:/Training/backend/public/next.html");
});

app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
