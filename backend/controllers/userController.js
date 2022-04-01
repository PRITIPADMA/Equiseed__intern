const User = require("../models/userModel");

//Create Product
exports.createUser = async(req, res, next)=>{
    const user = await User.create(req.body);
    res.status(201).json({status:true, user})
}

exports.getAllUsers = (req,res) =>(
    res.status(200).json({message:"Route is working fine"})
)