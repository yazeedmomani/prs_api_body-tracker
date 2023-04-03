const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.options("*", cors());

app.get("/api/v1/blood-pressure", (request, response) => {
  response.status(200).json({
    status: "success",
    data: null,
  });
});

module.exports = app;
