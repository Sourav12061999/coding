const express = require("express");
let company = require("../Schemas/company.schema");
const route = express.Router();

route.get("/:companyId", async (req, res) => {
  let data = await company.findOne({ _id: req.params.companyId }).lean().exec();
  res.send(data);
});

module.exports = route;
