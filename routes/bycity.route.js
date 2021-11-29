const express = require("express");
let jobs = require("../Schemas/job.schema");
const route = express.Router();
route.get("/:city", async function (req, res) {
  let data = await jobs
    .find({ city: req.params.city })
    .populate("companyId")
    .lean()
    .exec();

  res.send(data);
});

module.exports = route;
