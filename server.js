require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(cors());

const subscribersRoute = require("./routes/subscribers");
app.use("/subscribers", subscribersRoute);

app.listen(5000, () => {
  console.log("Server started at 5000");
});
