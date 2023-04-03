const express = require("express");
const { getBP, createBP, deleteBP } = require("./controllers/bp");

const router = express.Router();

router.route("/").get(getBP).post(createBP);

router.route("/:id").delete(deleteBP);

module.exports = router;
