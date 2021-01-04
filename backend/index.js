require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const RouteUser = require("./routes/User");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("database connect!");
  })
  .catch((e) => {
    console.log("database error!");
  });

app.use(bodyParser.json());
app.use("/", RouteUser);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server Work! port ${process.env.PORT}`);
});
