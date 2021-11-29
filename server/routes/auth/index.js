const express = require('express')
const { checkUserLogin,newUserRegister } = require('../../controllers/auth/index')

const authRouter = express.Router()

authRouter.post('/login',checkUserLogin)
authRouter.post('/register',newUserRegister)

module.exports = authRouter