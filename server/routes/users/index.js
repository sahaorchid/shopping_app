const express = require('express')
const { getUserDetails,updateUserDetails,updateUserPassword } = require('../../controllers/users/index')

const userRouter = express.Router()

userRouter.get('/details/:id',getUserDetails)
userRouter.put('/update',updateUserDetails)
userRouter.put('/reset-password',updateUserPassword)

module.exports = userRouter