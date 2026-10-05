const User = require("../models/user.model");
const bcrypt = require("bcrypt");

async function signupUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists, please login"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });


        return res.status(201).json({
            message: "Signup successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = { signupUser };