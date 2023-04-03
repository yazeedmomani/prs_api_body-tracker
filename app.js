const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());

app.options("*", cors());

app.use("/api/v1", router);

module.exports = app;
