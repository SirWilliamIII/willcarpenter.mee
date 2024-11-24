const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const env = require("dotenv");

env.config();

const isProduction = process.env.NODE_ENV === "production";

app.use(express.static(path.resolve(__dirname, "..", "public")));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
