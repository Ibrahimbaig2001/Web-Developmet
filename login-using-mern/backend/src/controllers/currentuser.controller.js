const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

async function getCurrentUser(req,res){
    try{
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).select("username")
        if(!user){
            return res.status(401).json({message:"User not found"})
        }
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}
module.exports = {getCurrentUser}