const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("User", eventSchema);