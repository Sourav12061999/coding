const express = require("express");
let jobs = require("../Schemas/job.schema");
const route = express.Router();

route.get("/", async (req, res) => {
  let data = await jobs.find({ WFH: true }).populate("companyId").lean().exec();
  res.send(data);
});

module.exports = route;
