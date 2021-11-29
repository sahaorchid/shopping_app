const express = require('express')
const productsRoute = require('./routes/products/index')
const authRoute = require('./routes/auth/index')
const userRoute = require('./routes/users/index')

const app = express()

app.use(express.json())
app.use('/',productsRoute)
app.use('/auth',authRoute)
app.use('/user-profile',userRoute)


app.listen(3000,()=>{
    console.log("server started")
})