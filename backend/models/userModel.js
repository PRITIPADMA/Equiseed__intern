const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    }
})
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        // required:[true, "Please enter fname"]
    },
    lname:{
        type:String,
        // required:[true, "Please enter lname"]
    },
    email:{
        type:String,
        // required:[true, "Please enter e-mail"]
    },
    phoneNum:{
        type:Number,
        // required:[true, "Please enter a valid number"]
    },
    userName:{
        type:String,
        // required:[true, "Please enter a username"]
    },
    // events:[eventSchema],
    createdAt:{
        type:Date,
        default:Date.now
    },
    lastUpdatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User", userSchema);