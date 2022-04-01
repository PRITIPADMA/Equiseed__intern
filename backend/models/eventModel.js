const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Users", eventSchema);