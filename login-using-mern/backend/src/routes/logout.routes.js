const logout = require("../controllers/logout.controller")

const express = require('express')
const router = express.Router()

router.post('/', logout.logoutUser)

module.exports = router