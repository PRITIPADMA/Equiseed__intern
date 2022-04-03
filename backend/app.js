const express = require("express");

const app = express();

app.use(express.json());

var cors = require("cors");

app.use(cors());

//Route Importing
const user = require("./routes/userRoute");
app.use("/api/v1", user);

module.exports = app;
