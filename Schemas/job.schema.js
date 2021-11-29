const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
  WFH: Boolean,
  Notice: Number,
  Rating: Number,
  city: String,
});
const job = mongoose.model("jobs", jobSchema);

module.exports = job;
