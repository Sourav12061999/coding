const express = require("express");
let company = require("../Schemas/company.schema");
const route = express.Router();

route.get("/", async (req, res) => {
  let data = await company.find({}).sort({ jobPost: -1 });
  res.send(data[0]);
});

module.exports = route;
