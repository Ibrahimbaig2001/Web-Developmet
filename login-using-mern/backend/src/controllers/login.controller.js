const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );

        return res
            .cookie("token", token, {
                httpOnly: true,
                secure: false, // Set to true when using HTTPS in production
                maxAge: 24 * 60 * 60 * 1000
            })
            .status(200)
            .json({
                message: "Login successful",
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal Server Error, please siginup first"
        });
    }
}

module.exports = { loginUser };