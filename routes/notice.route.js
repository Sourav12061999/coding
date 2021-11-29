const express = require("express");
let jobs = require("../Schemas/job.schema");
const route = express.Router();

route.get("/:noticePeriod", async (req, res) => {
  let data = await jobs
    .find({ Notice: req.params.noticePeriod })
    .sort({ Rating: 1 })
    .populate("companyId")
    .lean()
    .exec();
  res.send(data);
});

module.exports = route;
