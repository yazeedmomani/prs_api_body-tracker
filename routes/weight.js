const express = require("express");
const {
  getWeight,
  createWeight,
  deleteWeight,
} = require("./controllers/weight");

const router = express.Router();

router.route("/").get(getWeight).post(createWeight);

router.route("/:id").delete(deleteWeight);

module.exports = router;
