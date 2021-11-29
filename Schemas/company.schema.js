const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  jobPost: Number,
});
const company = mongoose.model("companies", companySchema);

module.exports = company;
