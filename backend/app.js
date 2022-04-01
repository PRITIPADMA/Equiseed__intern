const express = require("express");

const app = express();

app.use(express.json());

//Route Importing
const user = require("./routes/userRoute");
app.use("/api/v1", user)

module.exports = app;