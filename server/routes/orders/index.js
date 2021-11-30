const express = require('express')
const { addNewOrder,deleteUserOrder } = require('../../controllers/orders/index')

const ordersRoute = express.Router()
ordersRoute.post('/',addNewOrder)
ordersRoute.delete('/delete/:id',deleteUserOrder)

module.exports = ordersRoute
