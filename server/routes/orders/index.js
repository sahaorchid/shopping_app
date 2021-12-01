const express = require('express')
const { addNewOrder,deleteUserOrder,getOrderByUserId } = require('../../controllers/orders/index')

const ordersRoute = express.Router()
ordersRoute.post('/',addNewOrder)
ordersRoute.get('/:user_id',getOrderByUserId)
ordersRoute.delete('/delete/:id',deleteUserOrder)

module.exports = ordersRoute
