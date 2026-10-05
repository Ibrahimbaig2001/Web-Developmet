const express = require('express')
const router = express.Router()
const {getCurrentUser} = require("../controllers/currentuser.controller")



router.get('/', getCurrentUser)

module.exports = router