const express = require('express')
const productsRoute = require('./routes/products/index')
const authRoute = require('./routes/auth/index')
const userRoute = require('./routes/users/index')
const cartRoute = require('./routes/cart/index')
const ordersRoute = require('./routes/orders/index')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/',productsRoute)
app.use('/auth',authRoute)
app.use('/user-profile',userRoute)
app.use('/cart',cartRoute)
app.use('/orders',ordersRoute)


app.listen(3000,()=>{
    console.log("server started")
})