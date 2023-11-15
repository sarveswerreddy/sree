const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./controller/studentRoutes")
const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://mulesarveswerreddy:saru@cluster0.ea7kfun.mongodb.net/MyHighSchool";

mongoose.connect(uri);

const db = mongoose.connection;

db.on("open", () => {
  console.log("database connected");
});
db.on("error", (error) => {
  console.log("error while connecting to database", error);
});

app.use(express.json());
app.use(cors()); //instantiation cors
app.use("/students", studentRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("server listening on port ", port);
});
