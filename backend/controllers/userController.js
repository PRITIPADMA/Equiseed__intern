const Users = require("../models/userModel");

//Create Product
exports.createUser = async(req, res, next)=>{
    const user = await User.create(req.body);
    res.status(201).json({status:true, user})
}

exports.getAllUsers = async(req,res) =>{

    const users = await Users.find()
    res.status(200).json({status:true, users})
}