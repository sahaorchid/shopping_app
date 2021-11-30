const express = require('express');
const cartRoute = express.Router()
const { getCartDetails,addNewCartItem,deleteCartItem } = require('../../controllers/cart/index')

cartRoute.get('/:user_id',getCartDetails)
cartRoute.post('/:user_id',addNewCartItem)
cartRoute.delete('/:cart_id',deleteCartItem)

module.exports = cartRoute