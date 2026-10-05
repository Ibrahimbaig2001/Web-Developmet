const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registerUser(req,res){
    const {username,email,password,role = "user"} = req.body
    const isUserAlreadyExist = await userModel.findOne({$or:[{username},{email}]})
    if(isUserAlreadyExist){
        return res.status(409).json({message:"User already exists"})
    }
    const hast = await bcrypt.hast(password,10)
    const user = await userModel.create({username,email,password:hash,role})
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY)
    res.cookie("token",token)
    res.status(200).json({
        message:"User registered successfully",
        user:{
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}
async function loginUser(req,res){
    const {username,email,password} = req.body
    const userlogin = await userModel.findOne({$or:[{username},{email}]})
    if(!userlogin){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }
    const isPasswordValid = await bcrypt.compare(password,userlogin.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }
    const token = jwt.sign({id:userlogin._id,role:userlogin.role},process.env.JWT_SECRET_KEY)
    res.cookie("token",token)
    res.status(200).json({
        message:"User logged in successfully",
        user:{
            username:userlogin.username,
            email:userlogin.email,
            role:userlogin.role
        }
    })
    async function logoutUser(req,res){
        res.clearCookie("token")
        res.status(200).json({message:"User logged out successfully"})
    }

}
module.exports = {registerUser,loginUser,logoutUser}