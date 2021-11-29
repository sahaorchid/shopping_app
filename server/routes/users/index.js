const express = require('express')
const { getUserDetails } = require('../../controllers/users/index')

const userRouter = express.Router()

userRouter.get('/details/:id',getUserDetails)

module.exports = userRouter