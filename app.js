const express = require("express");
const app = express();
const path = require("path");

const publiPath = path.resolve(__dirname, "./public");
app.use(express.static(publiPath));

app.use(express.static("public"));

app.use(express.static("views"));

app.listen(process.env.PORT || 3000, () => console.log("Server run"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
