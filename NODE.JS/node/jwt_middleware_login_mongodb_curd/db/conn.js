const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tast")
  .then(() => {
    console.log("connctions is success...");
  })
  .catch((e) => {
    console.log(e);
  });
