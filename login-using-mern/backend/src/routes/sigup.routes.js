const express = require('express')
const router = express.Router()
const signup = require('../controllers/sigup.controller')
router.post('/', signup.signupUser)

module.exports = router