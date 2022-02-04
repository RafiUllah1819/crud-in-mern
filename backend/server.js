const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 5000;

const url = "mongodb://127.0.0.1:27017/mernapp";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch(() => {
    console.log("errr in connection");
  });

app.use(cors());
app.use(bodyParser.json());

const userRouter = require("./routes/usersRoute");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
});
