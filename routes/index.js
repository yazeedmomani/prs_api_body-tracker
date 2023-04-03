const weightRouter = require("./weight");
const bpRouter = require("./bp");
const express = require("express");

const router = express.Router();

router.use("/bp", bpRouter);

router.use("/weight", weightRouter);

module.exports = router;
