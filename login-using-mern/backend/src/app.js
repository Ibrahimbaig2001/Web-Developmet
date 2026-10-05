const express = require('express')
const cors = require("cors");
const loginRoutes = require('./routes/login.routes')
const signupRoutes = require('./routes/sigup.routes')
const logoutRoutes = require('./routes/logout.routes')
const getmeRoutes = require('./routes/getme.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json())
app.use('/api/auth/login',loginRoutes)
app.use('/api/auth/signup',signupRoutes)
app.use('/api/auth/me',getmeRoutes)
app.use('/api/auth/logout',logoutRoutes)

module.exports = app