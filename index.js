const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Sourav:Sourav1999@cluster0.jbmyk.mongodb.net/eval2911"
  );
};

let byCity = require("./routes/byCity.route");
let WFH = require("./routes/WFH.route");
let notice = require("./routes/notice.route");
let rating = require("./routes/ratings.route");
let companyId = require("./routes/companyId.route");
let comMostJob = require("./routes/comMostJob.route");

app.use("/job/city", byCity);
app.use("/job/WFH", WFH);
app.use("/job/notice", notice);
app.use("/job/sortByRatings", rating);
app.use("/company/companyId=", companyId);
app.use("/company/mostJobs", comMostJob);

const start = async () => {
  await connect();
  app.listen(80, () => {
    console.log("Server Started");
  });
};

start();
