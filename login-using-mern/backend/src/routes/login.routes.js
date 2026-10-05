const express = require('express')
const router = express.Router()
const login = require('../controllers/login.controller')
const jwt = require('jsonwebtoken')

router.post('/', login.loginUser)

module.exports = router